import type {ValueOf} from 'type-fest';
import type {NavBarButtonStyle} from '@libs/NavBarManager/types';
import type CONST from '@src/CONST';
import type {ColorScheme, StatusBarStyle} from '..';

type Color = string;

type ThemePreference = ValueOf<typeof CONST.THEME>;
type ThemePreferenceWithoutSystem = Exclude<ThemePreference, typeof CONST.THEME.SYSTEM>;

type ThemeColors = {
    // Figma keys
    appBG: Color;
    splashBG: Color;
    highlightBG: Color;
    messageHighlightBG: Color;
    border: Color;
    borderLighter: Color;
    borderFocus: Color;
    icon: Color;
    iconMenu: Color;
    iconHovered: Color;
    iconMenuHovered: Color;
    iconSuccessFill: Color;
    iconDangerFill: Color;
    iconReversed: Color;
    iconColorfulBackground: Color;
    textSupporting: Color;
    text: Color;
    textColorfulBackground: Color;
    textReceiptDropZone: Color;
    textAttachmentDropZone: Color;
    syntax: Color;
    link: Color;
    linkHover: Color;
    buttonDefaultBG: Color;
    buttonHoveredBG: Color;
    buttonPressedBG: Color;
    buttonSuccessText: Color;
    danger: Color;
    dangerHover: Color;
    dangerPressed: Color;
    warning: Color;
    success: Color;
    successHover: Color;
    successPressed: Color;
    transparent: Color;
    signInPage: Color;
    darkSupportingText: Color;

    // Additional keys
    overlay: Color;
    inverse: Color;
    shadow: Color;
    componentBG: Color;
    hoverComponentBG: Color;
    activeComponentBG: Color;
    signInSidebar: Color;
    sidebar: Color;
    sidebarHover: Color;
    heading: Color;
    textLight: Color;
    textDark: Color;
    textReversed: Color;
    textBackground: Color;
    textMutedReversed: Color;
    textError: Color;
    offline: Color;
    modalBackground: Color;
    cardBG: Color;
    cardBorder: Color;
    spinner: Color;
    unreadIndicator: Color;
    placeholderText: Color;
    heroCard: Color;
    uploadPreviewActivityIndicator: Color;
    dropUIBG: Color;
    dropWrapperBG: Color;
    fileDropUIBG: Color;
    attachmentDropUIBG: Color;
    attachmentDropUIBGActive: Color;
    attachmentDropBorderColorActive: Color;
    receiptDropUIBG: Color;
    receiptDropUIBGActive: Color;
    receiptDropBorderColorActive: Color;
    checkBox: Color;
    imageCropBackgroundColor: Color;
    fallbackIconColor: Color;
    reactionActiveBackground: Color;
    reactionActiveText: Color;
    badgeAdHoc: Color;
    badgeAdHocHover: Color;
    mentionText: Color;
    mentionBG: Color;
    ourMentionText: Color;
    ourMentionBG: Color;
    tooltipHighlightBG: Color;
    tooltipHighlightText: Color;
    tooltipSupportingText: Color;
    tooltipPrimaryText: Color;
    trialBannerBackgroundColor: Color;
    skeletonLHNIn: Color;
    skeletonLHNOut: Color;
    QRLogo: Color;
    starDefaultBG: Color;
    mapAttributionText: Color;
    white: Color;
    videoPlayerBG: Color;
    transparentWhite: Color;
    emptyFolderBG: Color;
    travelBG: Color;
    todoBG: Color;
    trialTimer: Color;

    PAGE_THEMES: Record<string, {backgroundColor: Color; statusBarStyle: StatusBarStyle}>;

    // Status bar and scroll bars need to adapt their theme based on the active user theme for good contrast
    // Therefore, we need to define specific themes for these elements
    // e.g. the StatusBar displays either "light-content" or "dark-content" based on the theme
    statusBarStyle: StatusBarStyle;
    navigationBarButtonsStyle: NavBarButtonStyle;
    translucentNavigationBarBackgroundColor: Color;
    colorScheme: ColorScheme;
};

export {type ThemePreferenceWithoutSystem, type ThemeColors, type Color};
