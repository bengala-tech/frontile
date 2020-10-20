const defaultTheme = require('tailwindcss/resolveConfig')(
  require('tailwindcss/defaultConfig')
).theme;

const defaultConfig = {
  textColor: 'inherit',
  zIndex: 50,
  borderRadius: defaultTheme.borderRadius.default,
  backdropColor: 'rgba(0, 0, 0, 0.45)',
  modal: {
    headerPadding: defaultTheme.padding[4],
    bodyPadding: defaultTheme.padding[4],
    footerPadding: defaultTheme.padding[4],
    backgroundColor: defaultTheme.colors.white,
    secondaryBackgroundColor: defaultTheme.colors.gray[100], // Background for footer and close btn applied on hover
    iconColor: defaultTheme.colors.black,
    borderColor: defaultTheme.borderColor.default,
    maxWidth: defaultTheme.maxWidth['xl'],
    closeBtnMargin: defaultTheme.spacing[2]
  },
  drawer: {
    backgroundColor: defaultTheme.colors.white,
    boxShadow: defaultTheme.boxShadow.default,

    header: {
      padding: defaultTheme.padding[4]
    },

    body: {
      padding: defaultTheme.padding[4]
    },

    footer: {
      borderColor: defaultTheme.borderColor.default,
      padding: defaultTheme.padding[4],
      backgroundColor: defaultTheme.colors.gray[100]
    },

    obscurer: {
      disabled: false,
      size: defaultTheme.padding[4],
      background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, ${defaultTheme.colors.white} 100%)`
    },

    sizes: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      full: '100%'
    }
  }
};

function defaultOptions({ config }) {
  const inset0 = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  };

  const slideTransition = {
    enterActive: {
      transition: 'transform 0.2s cubic-bezier(0.37, 0, 0.63, 1)'
    },

    leaveActive: {
      transition: 'transform 0.2s cubic-bezier(0.37, 0, 0.63, 1)'
    }
  };

  const drawerSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'].reduce(
    (obj, key) => {
      obj[key] = {
        vertical: {
          maxHeight: config.drawer.sizes[key]
        },
        horizontal: {
          maxWidth: config.drawer.sizes[key]
        }
      };
      return obj;
    },
    {}
  );

  return {
    default: {
      overlay: {
        color: config.textColor,
        zIndex: config.zIndex,
        jsIsOpen: {
          overflow: 'hidden'
        },

        backdrop: {
          ...inset0,
          position: 'fixed',
          backgroundColor: config.backdropColor,
          userSelect: 'none',
          zIndex: 1
        },

        content: {
          ...inset0,
          position: 'fixed',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          '-webkit-overflow-scrolling': 'touch',
          zIndex: 2,
          willChange: 'transform'
        }
      },
      modal: {
        backgroundColor: config.modal.backgroundColor,
        borderRadius: config.borderRadius,
        boxShadow: defaultTheme.boxShadow.default,
        marginBottom: defaultTheme.margin[24],
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: defaultTheme.spacing[24],
        width: defaultTheme.width.full,
        maxWidth: config.modal.maxWidth,
        outline: 'none',
        position: 'relative',

        [`@media (max-width: ${defaultTheme.screens.sm})`]: {
          maxWidth: `calc(100vw - ${defaultTheme.margin[4]})`
        },

        closeBtn: {
          display: 'flex',
          position: 'absolute',
          fontSize: defaultTheme.fontSize.xl,
          padding: defaultTheme.spacing[2],
          top: config.modal.closeBtnMargin,
          right: config.modal.closeBtnMargin,
          transitionProperty: defaultTheme.transitionProperty.default,
          transitionDuration: defaultTheme.transitionDuration[200],
          borderRadius: defaultTheme.borderRadius.full,

          '&:hover': {
            backgroundColor: config.modal.secondaryBackgroundColor
          },

          '&.focus-visible:focus': {
            outline: 'none',
            boxShadow: defaultTheme.boxShadow.outline
          },

          icon: {
            height: '1em',
            width: '1em',
            backgroundRepeat: 'no-repeat',
            iconColor: config.modal.iconColor,
            icon: (iconColor) =>
              `<svg fill="none" stroke="${iconColor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12"></path></svg>`
          }
        },
        header: {
          fontWeight: defaultTheme.fontWeight.bold,
          fontSize: defaultTheme.fontSize.xl,
          padding: config.modal.headerPadding,
          borderTopRightRadius: config.borderRadius,
          borderTopLeftRadius: config.borderRadius
        },
        body: {
          padding: config.modal.bodyPadding
        },
        footer: {
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: config.modal.secondaryBackgroundColor,
          borderTopWidth: defaultTheme.borderWidth.default,
          borderTopColor: config.modal.borderColor,
          padding: config.modal.footerPadding,
          borderBottomRightRadius: config.borderRadius,
          borderBottomLeftRadius: config.borderRadius,
          alignItems: 'center'
        }
      },

      drawer: {
        drawer: {
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          backgroundColor: config.drawer.backgroundColor,
          width: '100%',
          height: '100%',
          boxShadow: config.drawer.boxShadow.default
        },

        header: {
          fontWeight: defaultTheme.fontWeight.bold,
          fontSize: defaultTheme.fontSize.xl,
          padding: config.drawer.header.padding
        },

        body: {
          flexGrow: 1,
          flexBasis: 0,
          padding: config.drawer.body.padding,
          overflowY: 'scroll',
          '-webkit-overflow-scrolling': 'touch'
        },

        footer: {
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: config.drawer.footer.backgroundColor,
          borderTopWidth: defaultTheme.borderWidth.default,
          borderTopColor: config.drawer.footer.borderColor,
          padding: config.drawer.footer.padding,
          alignItems: 'center',
          position: 'relative',
          '&:before': config.drawer.obscurer.disabled
            ? undefined
            : {
                position: 'absolute',
                top: `calc(-${config.drawer.obscurer.size} - ${defaultTheme.borderWidth.default})`,
                left: 0,
                content: '" "',
                height: config.drawer.obscurer.size,
                width: '100%',
                background: config.drawer.obscurer.background
              }
        },

        placements: {
          top: {
            top: 0,
            right: 0,
            left: 0
          },
          bottom: {
            bottom: 0,
            right: 0,
            left: 0
          },
          left: {
            left: 0,
            top: 0,
            bottom: 0
          },
          right: {
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        sizes: drawerSizes
      },

      transitions: {
        fade: {
          enter: {
            opacity: 0
          },
          enterActive: {
            transition: 'opacity 0.2s linear'
          },
          leave: {
            opacity: 1
          },
          leaveActive: {
            transition: 'opacity 0.2s linear'
          }
        },
        zoom: {
          enter: {
            opacity: 0,
            transform: 'scale(0.8)'
          },
          enterActive: {
            transition: 'all 0.2s ease-in-out'
          },
          leave: {
            opacity: 1,
            transform: 'scale(1)'
          },
          leaveActive: {
            transition: 'all 0.2s ease-in-out'
          }
        },
        slideFromLeft: {
          enter: {
            transform: 'translateX(-100%)'
          },
          leave: {
            transform: 'translateX(0%)'
          },
          ...slideTransition
        },
        slideFromRight: {
          enter: {
            transform: 'translateX(100%)'
          },
          leave: {
            transform: 'translateX(0%)'
          },
          ...slideTransition
        },

        slideFromTop: {
          enter: {
            transform: 'translateY(-100%)'
          },
          leave: {
            transform: 'translateY(0%)'
          },
          ...slideTransition
        },
        slideFromBottom: {
          enter: {
            transform: 'translateY(100%)'
          },
          leave: {
            transform: 'translateY(0%)'
          },
          ...slideTransition
        }
      }
    },
    'in-place': {
      overlay: {
        backdrop: {
          position: 'absolute'
        },
        content: {
          position: 'absolute'
        }
      }
    },
    centered: {
      modal: {
        marginTop: 'auto',
        marginBottom: 'auto'
      }
    }
  };
}

module.exports = {
  defaultConfig,
  defaultOptions
};