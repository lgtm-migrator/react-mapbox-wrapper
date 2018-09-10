import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'Utils';
import Popup from 'Popup';
import { mapboxgl } from 'MapboxMap';

/**
 * Debounce timeout;
 * @type {Number}
 */
export const DEBOUNCE_TIMEOUT = 200;

/**
 * Marker rendered on map.
 */
export default class Marker extends Component {
    /**
     * Creates an instance of Marker.
     * @param {Object} props Component props
     */
    constructor(props) {
        super(props);

        /**
         * Timer for mouseover/out debouncing
         * @type {Number}
         * @private
         */
        this.overTimeout = 0;

        /**
         * Instance of the marker
         * @type {Mapbox.Marker}
         * @private
         */
        this.marker = null;

        /**
         * Instance of the popup
         * @type {Mapbox.Popup}
         * @private
         */
        this.popup = null;

        this.onMarkerOver = this.onMarkerOver.bind(this);
        this.onMarkerOut = this.onMarkerOut.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.setContainer = this.setContainer.bind(this);
        this.setPopup = this.setPopup.bind(this);
        this.clearDebounce = this.clearDebounce.bind(this);
        this.moveToTop = this.moveToTop.bind(this);
    }

    /**
     * React lifecycle.
     * @param {Object} nextProps Next props
     */
    componentWillReceiveProps(nextProps) {
        if (!this.marker) {
            return;
        }

        const currentCoord = this.props.coordinates;
        const nextCoord = nextProps.coordinates;

        if (currentCoord.lat !== nextCoord.lat || currentCoord.lng !== nextCoord.lng) {
            this.marker.setLngLat(nextProps.coordinates);
        }
    }

    /**
     * React lifecycle.
     */
    componentWillUnmount() {
        if (!this.marker) {
            return;
        }

        this.clearDebounce();
        this.marker.remove();
    }

    /**
     * Mouse over on a marker : display popup
     * @param {Event} e
     */
    onMarkerOver(e) {
        this.clearDebounce();

        const { popupOnOver, onMouseOver } = this.props;

        if (popupOnOver && this.popup && !this.popup.isOpen()) {
            this.marker.togglePopup();
        }

        if (isFunction(onMouseOver)) {
            onMouseOver(e);
        }
    }

    /**
     * Mouse over on a marker : hide popup
     * @param {Event} e
     * @use setTimeout for debouncing
     */
    onMarkerOut(e) {
        this.clearDebounce();

        this.overTimeout = setTimeout(() => {
            const { popupOnOver, onMouseOut } = this.props;

            if (popupOnOver && this.popup && this.popup.isOpen()) {
                this.marker.togglePopup();
            }

            if (isFunction(onMouseOut)) {
                onMouseOut(e);
            }
        }, DEBOUNCE_TIMEOUT);
    }

    /**
     * Call dragend if function is passed from props
     */
    onDragEnd() {
        const { onDragEnd } = this.props;

        if (isFunction(onDragEnd)) {
            onDragEnd(this.marker.getLngLat());
        }
    }

    /**
     * Attach to the dom
     * @param {Element} element Dom element of the marker
     */
    setContainer(element) {
        if (!element) {
            return;
        }

        const { coordinates, map, anchor, offset, draggable, onDragEnd, getRef } = this.props;

        this.marker = new mapboxgl.Marker({ element, anchor, offset, draggable });
        this.marker.setLngLat(coordinates);
        this.marker.addTo(map);

        if (draggable && isFunction(onDragEnd)) {
            this.marker.on('dragend', this.onDragEnd);
        }

        if (isFunction(getRef)) {
            getRef(this);
        }
    }

    /**
     * Display a Popup from a marker
     * @param {Object} ref React ref element of the marker
     */
    setPopup(ref) {
        if (!ref) {
            return;
        }

        if (!this.marker) {
            return;
        }

        this.popup = ref.getMapboxPopup();
        this.marker.setPopup(this.popup);
    }

    /**
     * Clear mouseover timeout
     */
    clearDebounce() {
        clearTimeout(this.overTimeout);
    }

    /**
     * Place marker at the top of layers
     */
    moveToTop() {
        if (this.marker) {
            this.marker.remove();
            this.marker.addTo(this.props.map);
        }
    }

    /**
     * React lifecycle.
     */
    render() {
        const { children, popup, popupOffset, popupCloseButton } = this.props;

        return (
            <span>
                <div
                    key="marker"
                    ref={this.setContainer}
                    onMouseOver={this.onMarkerOver}
                    onMouseOut={this.onMarkerOut}
                >
                    {children}
                </div>
                {popup && (
                    <Popup
                        key="popup"
                        ref={this.setPopup}
                        onMouseOver={this.clearDebounce}
                        onMouseOut={this.onMarkerOut}
                        closeButton={popupCloseButton}
                        offset={popupOffset}
                    >
                        {popup}
                    </Popup>
                )}
            </span>
        );
    }
}

Marker.propTypes = {
    coordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
    anchor: PropTypes.string,
    offset: PropTypes.number,
    popupOffset: PropTypes.number,
    getRef: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    draggable: PropTypes.bool,
    map: PropTypes.shape({}).isRequired,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    onDragEnd: PropTypes.func,
    popup: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    popupCloseButton: PropTypes.bool,
    popupOnOver: PropTypes.bool,
};

Marker.defaultProps = {
    anchor: undefined,
    offset: undefined,
    popupOffset: undefined,
    getRef: undefined,
    children: undefined,
    draggable: undefined,
    onMouseOut: undefined,
    onMouseOver: undefined,
    onDragEnd: undefined,
    popup: undefined,
    popupCloseButton: undefined,
    popupOnOver: undefined,
};