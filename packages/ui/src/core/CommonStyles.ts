import { StyleSheet } from 'react-native';

import { Colors } from './Colors';
import { AppMargin, Spacer, SpacingScale } from './Spacing';
import { IconSizeScale } from '../components/icons';

/**
 * A collection of default styles used within IO App.
 */

interface VisualCostants {
  appMarginDefault: AppMargin;
  // Header
  headerHeight: number;
  // Dimensions
  avatarSizeSmall: number;
  avatarSizeMedium: number;
  avatarRadiusSizeSmall: number;
  avatarRadiusSizeMedium: number;
  iconContainedSizeDefault: number;
  scrollDownButtonRight: number;
  scrollDownButtonBottom: number;
  iconMargin: SpacingScale;
}

export const VisualCostants: VisualCostants = {
  appMarginDefault: 24,
  headerHeight: 56,
  avatarSizeSmall: 44,
  avatarSizeMedium: 66,
  avatarRadiusSizeSmall: 8,
  avatarRadiusSizeMedium: 12,
  iconContainedSizeDefault: 44,
  scrollDownButtonRight: 24,
  scrollDownButtonBottom: 24,
  iconMargin: 12,
};

export const CommonStyles = StyleSheet.create({
  // The following styles come from the original
  // NativeBase's `View`. They are moved here to
  // prevent UI regressions.
  footer: {
    backgroundColor: Colors.white,
    paddingBottom: 16,
    paddingHorizontal: VisualCostants.appMarginDefault,
    paddingTop: 16,
    // iOS shadow
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.5,
    shadowRadius: 37,
    elevation: 20, // Prop supported on Android only
  },
});

/**
 * BUTTON STYLES
 */

/* SIZE
- Height for classic buttons
- Width and height for icon buttons
*/
const btnSizeLarge = 56;
// NEW Design System
const btnBorderRadius = 8;
const btnSizeDefault = 48;
export const buttonSolidHeight: number = btnSizeDefault;

// TODO: Replace the number type with the new IconSizeScale
export const iconBtnSizeSmall: number = 24;

export const ButtonStyles = StyleSheet.create({
  /* BaseButton, used in the:
  ButtonSolid, ButtonOutline
  */
  /* DELETE THIS, ONCE WE REMOVE `ButtonSolid`, `ButtonOutline` COMPONENTS */
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center', // Prop supported on Android only
    /* Legacy visual properties. They will be replaced with
    dynamic ones once NativeBase is gone */
    borderRadius: btnBorderRadius,
    borderCurve: 'continuous',
    paddingHorizontal: 24,
    // Reset default visual parameters
    elevation: 0,
    // Visual parameters based on the FontScale
    // paddingVertical: PixelRatio.getFontScale() * 10,
    // paddingHorizontal: PixelRatio.getFontScale() * 16,
    // borderRadius: PixelRatio.getFontScale() * 8
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center', // Prop supported on Android only
    // Reset default visual parameters
    elevation: 0,
  },
  /* Labels */
  label: {
    alignSelf: 'center',
  },
  labelSizeDefault: {
    fontSize: 16,
  },
  labelSizeSmall: {
    fontSize: 16,
  },
  /* Heights
  Must be replaced with dynamic values, depending on the
  fontScale parameter */
  buttonSizeDefault: {
    height: btnSizeDefault,
  },
  buttonSizeSmall: {
    height: btnSizeDefault,
  },
});

export const IconButtonStyles = StyleSheet.create({
  /* IconButton */
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSizeSmall: {
    width: iconBtnSizeSmall,
    height: iconBtnSizeSmall,
  },
  buttonSizeDefault: {
    width: btnSizeDefault,
    height: btnSizeDefault,
    borderRadius: btnSizeDefault,
  },
  buttonSizeLarge: {
    width: btnSizeLarge,
    height: btnSizeLarge,
    borderRadius: btnSizeLarge,
  },
});

/**
 * LIST ITEM STYLES
 */

interface ListItemVisualParams {
  paddingVertical: SpacingScale;
  paddingHorizontal: AppMargin;
  iconMargin: SpacingScale;
  actionMargin: SpacingScale;
  iconSize: IconSizeScale;
  chevronSize: IconSizeScale;
}

export const ListItemVisualParams: ListItemVisualParams = {
  paddingVertical: 12,
  paddingHorizontal: VisualCostants.appMarginDefault,
  iconMargin: VisualCostants.iconMargin,
  actionMargin: 16,
  iconSize: 24,
  chevronSize: 24,
};

export const ListItemStyles = StyleSheet.create({
  listItem: {
    paddingVertical: ListItemVisualParams.paddingVertical,
    paddingHorizontal: ListItemVisualParams.paddingHorizontal,
    marginHorizontal: -ListItemVisualParams.paddingHorizontal,
  },
  listItemInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

/**
 * SELECTION ITEM STYLES
 */

interface SelectionTickVisualParams {
  size: IconSizeScale;
  borderWidth: number;
}

export const SelectionTickVisualParams: SelectionTickVisualParams = {
  size: 24,
  borderWidth: 2,
};

interface SelectionListItemVisualParams {
  paddingVertical: SpacingScale;
  paddingHorizontal: AppMargin;
  iconMargin: SpacingScale;
  actionMargin: Spacer;
  iconSize: IconSizeScale;
  descriptionMargin: Spacer;
}

export const SelectionListItemVisualParams: SelectionListItemVisualParams = {
  paddingVertical: 16,
  paddingHorizontal: VisualCostants.appMarginDefault,
  iconMargin: VisualCostants.iconMargin,
  iconSize: 24,
  actionMargin: 8,
  descriptionMargin: 4,
};

export const SelectionListItemStyles = StyleSheet.create({
  listItem: {
    paddingVertical: ListItemVisualParams.paddingVertical,
    paddingHorizontal: ListItemVisualParams.paddingHorizontal,
    marginHorizontal: -ListItemVisualParams.paddingHorizontal,
  },
  listItemInner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
