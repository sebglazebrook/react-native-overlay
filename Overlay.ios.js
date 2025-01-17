/**
 * @providesModule Overlay
 * @flow-weak
 */

'use strict';

var React = require('react-native');
var {
  View,
  PropTypes,
  StyleSheet,
  requireNativeComponent,
} = React;

type Props = {
  isVisible: boolean;
}

var Overlay = React.createClass({
  propTypes: {
    /**
     * When this property is set to `true`, the Overlay will appear on
     * `UIWindowLevelStatusBar`, otherwise it will appear below that.
     */
    aboveStatusBar: React.PropTypes.bool,

    /**
     * Determines the visibility of the Overlay. When it is not visible,
     * an empty View is rendered.
     */
    isVisible: React.PropTypes.bool,
  },

  getDefaultProps(): Props {
    return {
      aboveStatusBar: false,
      isVisible: false,
      styles: StyleSheet.create({
        container: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderWidth: 0,
          backgroundColor: 'transparent',
        },
      })
    }
  },

  render() {
    var {
      isVisible,
    } = this.props;

    if (this.props.isVisible) {
      return (
        <RNOverlay isVisible={true} style={this.props.styles.container} pointerEvents="none" aboveStatusBar={this.props.aboveStatusBar}>
          {React.Children.map(this.props.children, React.addons.cloneWithProps)}
        </RNOverlay>
      );
    } else {
      return <View />;
    }
  },
});

var RNOverlay = requireNativeComponent('RNOverlay', Overlay);

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
})

module.exports = Overlay;
