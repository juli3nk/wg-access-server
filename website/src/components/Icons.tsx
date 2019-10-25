import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

// from https://worldvectorlogo.com

export const MacOSIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 256 256">
    <defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#58B0E3" offset="0%" /><stop stopColor="#F44E28" offset="100%" /></linearGradient></defs><circle fill="#FFF" cx="128" cy="128" r="128" /><path d="M186.831 49.21h-7.774l-50.825 73.452h-.464L77.059 49.21h-7.89l54.77 79.022L69.4 206.79h7.774l50.477-73.22h.464l50.476 73.22h7.891l-54.538-78.558 54.886-79.022z" fill="url(#a)" />
  </SvgIcon>
);

export const IosIcon = () => (
  <SvgIcon viewBox="0.276 0.525 124.326 79.116">
    <path d="M4.621 6.965c0 1.368-.833 2.38-2.262 2.38-1.19 0-2.083-1.012-2.083-2.38 0-1.31.952-2.381 2.202-2.381 1.31 0 2.143 1.071 2.143 2.381zM1.327 78.5V23.78H3.57V78.5H1.327zM78.174 39.512c0 27.588-15.315 40.129-32.079 40.129-17.125 0-30.993-13.565-30.993-38.988C15.102 14.549 29.453.526 47.301.526 64.787.524 78.174 14.318 78.174 39.512zm-60.799.57C17.375 61 27.513 77.25 46.201 77.25c18.818 0 29.611-16.75 29.611-37.406 0-19.155-8.648-36.636-28.382-36.636S17.375 19.667 17.375 40.082zM86.406 72.571c3.763 2.508 10.258 4.93 15.844 4.93 10.602 0 20.031-7.417 20.031-18.334 0-10.131-6.281-15.417-16.945-19.958-9.544-4.064-18.125-8.475-18.125-19.305 0-11.285 8.891-19.267 20.975-19.267 6.498 0 11.4 1.824 13.68 3.42l-.906 1.968c-1.938-1.367-7.176-3.109-12.874-3.109-12.771 0-18.334 9.65-18.334 16.754 0 9.812 7.606 13.093 17.41 17.767 11.399 5.585 17.44 10.51 17.44 21.227 0 11.514-8.207 20.86-22.799 20.86-6.043 0-12.996-2.051-16.416-4.674l1.019-2.279z" />
  </SvgIcon>
);


export const WindowsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 256 257">
    <path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#00ADEF" />
  </SvgIcon>
);

export const LinuxIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 192.756 192.756">
    <g>
      <path fill="transparent" d="M0 0h192.756v192.756H0V0z" />
      <path fill="#fff" d="M72.965 52.752l-.289-19.693 11.718-6.863 17.399-11.717 7.152-.291 7.442 7.999 4.009 26.578-5.435 9.713-22.569-.58-19.427-5.146z" />
      <path fill="#fff" d="M49.818 109.05l5.993-16.865 11.718-13.991 5.993-12.007 2.584-3.989 42.841-6.572 8.578 13.434 23.995 57.412-8.29 10.269-21.72 36.315-5.123 1.135-39.723 1.136-27.714-30.855-4.568-25.709 5.436-9.713z" />
      <path fill="#f6d330" d="M104.668 65.34s-1.426-.29 2.562-1.159c4.01-.846 4.031-1.693 5.145-2.852 1.137-1.136 1.717-3.721 1.717-6.572s1.426-11.139 1.135-13.411c-.266-2.295-5.146-10.85-7.129-12.008-2.004-1.136-24.283-3.142-24.283-3.142l-6.862 5.437-5.146 4.834 1.158 15.439s-1.448 4.856-1.158 6.839c.29 2.005 3.163 4.3 4.299 5.436 1.136 1.159 5.414 5.748 6.839 7.151 1.448 1.426 1.738 2.852 5.146 1.715 3.431-1.136 5.436-1.136 8.021-3.141 2.562-2.005 8.556-4.566 8.556-4.566z" />
      <path fill="#fff" d="M91.523 41.057c.869-2.295 2.005-6.572 3.988-7.998 2.004-1.426 6.305-2.606 8.868-2.295 2.584.29 7.418 2.852 8.576 4.856 1.137 2.005 1.137 10.003 1.137 10.003l-.58 6.572-3.988-.289-8.576-3.432h-1.426s-1.426.557-5.726-1.715c-4.278-2.294-3.142-3.408-2.273-5.702zM82.389 47.339c.134-.134.401-.312.758-.513 1.737-.958 5.524-2.361 5.524-2.361s3.698-9.401.557-13.122c-3.119-3.72-9.98-3.141-9.98-3.141s-7.418 4.278-7.151 5.993c.29 1.716.579 7.708.869 8.555.268.869 1.426 10.003 1.426 10.003l2.562-1.136 3.721-2.852c-.001 0 .867-.557 1.714-1.426z" />
      <path fill="#f6d330" d="M136.949 133.622l4.143.312c.602.045 1.203.066 1.805.089 3.074.111 5.771.579 8.645.936 1.895.224 5.035 1.427 5.258 3.81.312 3.521-.713 7.396 2.271 8.845 3.053 2.072 9.869 6.862 9.869 6.862l2.006 3.697-5.992 5.437-29.43 17.711-13.412-4.567v-10.85l.557-14.569-1.426-13.145 2.273-5.146 5.725-1.716 7.708 2.294zM51.846 127.206c-.29-.268-5.503 1.271-5.837 1.337-2.428.356-5.502 2.027-5.502 4.679 0 1.359-.111 2.763-.735 3.988-.49.957-1.604 2.405-1.582 2.718-.379 1.047-1.069 2.517-2.027 3.141-1.114.112-6.06.558-6.06.558h-4.3l-2.562 3.118 2.005 8.311-.58 6.55-1.983 7.44 4.834 2.562 36.581 9.713 8.288-2.562 4.277-10.582-.869-3.988-3.987-7.998c0-.001-17.377-25.242-19.961-28.985z" />
      <path fill="#000" d="M70.47 37.536c-.601-19.938 7.174-28.739 23.325-29.028 16.13-.312 26.244 8.198 28.316 19.36 2.049 11.139.869 25.82 4.99 33.44 4.1 7.641 6.729 13.5 13.791 22.3 7.039 8.8 11.428 17.756 13.479 28.627 2.07 10.85 3.23 15.974-2.051 21.565-5.279 5.569-14.658 14.659-21.699 4.389-3.541-5.146-3.92-11.54 2.051-12.898 3.809-.892 6.549-.602 9.379.868 2.852 1.471 3.52.779.111-1.76-3.432-2.54-4.121-.201-2.941-4.3 1.182-4.1 2.719-11.474-.49-19.583-1.492-3.742-6.549-13.99-11.295-16.508-.424-.245-1.67-.757-.824.29 1.27 1.582 8.109 11.651 10.047 17.644 2.072 6.439 2.361 12.588 1.293 16.486-1.068 3.921-2.941 5.48-5.191 5.48s-4.299 1.069-4.299-4.099c0-5.191.535-13.011-2.25-19.628-2.785-6.594-6.172-11.139-6.906-13.924-.713-2.785-2.34-10.27-5.703-14.525-3.387-4.255-4.857-7.04-3.098-11.896 1.76-4.834.445-6.149-3.074-7.174-3.52-1.024-8.221-2.495-9.379-4.856-1.181-2.339-.445-7.04 2.184-8.198 2.65-1.181 7.039.423 7.195 3.81.156 3.364-1.471 5.124-1.023 5.859.445.735 2.783 1.916 3.965.602 1.158-1.337 1.471-5.437.289-9.246-1.182-3.81-1.76-6.461-6.016-7.33-4.254-.892-6.17-.602-8.22 2.049-2.05 2.629-2.94 6.884-2.339 9.981.579 3.074-.602 1.314-2.651 1.158-2.05-.134-1.47-.29-3.52-.134-2.05.134-1.314-1.181-1.471-3.386-.134-2.206-.423-6.75-3.52-8.51-3.075-1.76-8.354.29-8.221 7.642.156 7.33 2.651 10.849 4.122 8.198 1.47-2.629.735-1.314-.735-2.495-1.47-1.158-2.495-6.015-.891-7.463 1.626-1.47 3.52-1.47 4.567-.601 1.025.891 2.629 3.832 2.339 5.725-.29 1.916-.446 2.05-2.339 3.386-1.916 1.314-2.651 2.495-4.856 3.943-2.206 1.47-3.074 4.857-1.314 5.726 1.76.891 1.916.735 3.364 2.941 1.47 2.206 3.965 3.23 10.136 2.206 6.149-1.025 8.688-2.495 13.345-4.122 3.387-1.159 2.205-1.025 3.387-2.339 1.158-1.314 3.074.579 1.314 1.76-1.76 1.181-5.727 2.339-8.666 3.364-2.919 1.047-6.305 3.966-12.454 3.676-6.171-.29-1.916-.156-3.832-.29-1.894-.156-2.785.134-.735 1.604 2.072 1.471 1.916 1.916 3.676 2.495 1.76.602 4.099.602 6.906-.423 2.785-1.047 9.826-4.122 12.031-5.592 2.184-1.47 3.943.446 1.76 1.916-2.205 1.47-2.807 1.025-4.857 2.339-2.049 1.337-5.859 3.52-8.354 5.881-2.495 2.339-3.074 2.495-6.171 2.629-3.074.156-4.99-3.074-6.305-4.544-1.314-1.471-1.181-2.339-2.785-4.1-1.604-1.76-1.76-1.337-2.05.579s-2.495 6.75-4.411 9.981c-1.894 3.23-2.05 7.196-1.76 9.981.29 2.785-.445 3.074-2.628 6.304-2.206 3.23-5.882 12.765-6.461 15.84-.58 3.074-1.314 9.401-1.025 13.055.29 3.676-.735 4.411-3.386 1.916-2.629-2.495-3.521-5.28-3.364-8.956.134-3.141.557-5.347.958-6.505.401-1.158.022-1.96-.824-.534-1.805 3.118-1.894 8.51-1.448 10.426.423 1.894.579 5.28 5.414 9.824 4.856 4.545 11.896 10.85 17.756 15.105 5.881 4.255 7.931 9.535-.735 13.345 5.436 7.352 8.376 11.161 6.015 15.995 4.856-2.785 2.985-9.356.646-11.117-2.362-1.76-.936-3.118 1.114-1.781 2.05 1.314 2.785 3.943 10.872 3.809 8.064-.155 16.753-.957 21.611-8.02 4.834-7.04 5.77-1.114 4.588 3.008-1.158 4.099-4.055 13.367.49 12.498.58-5.437 1.916-10.137 1.916-15.996 0-5.882.58-8.711.135-17.221-.447-8.199 3.096-8.756 6.75-8.756 3.676 0 2.494 2.361.156 2.205-2.361-.155-4.836.736-4.99 6.751-.156 6.015 0 5.436 1.023 10.85 1.025 5.436 1.182 7.04.291 13.055-.869 6.016-1.605 9.245 2.361 12.922 3.943 3.676 9.957 2.629 13.055.289 3.074-2.339 8.934-7.774 14.213-9.535 5.303-1.76 10.873-3.074 13.812-6.015 2.92-2.94 2.184-4.99-.891-6.595-3.074-1.626-6.016-.891-8.354-3.52-2.363-2.651-3.521-8.511-2.652-11.607.891-3.074 1.916-1.76 1.916.446 0 2.205.135 4.255 2.34 7.039 2.205 2.785 4.254 4.122 7.775 6.305 3.52 2.206 5.725 5.726 1.314 8.822-4.389 3.074-6.885 4.835-10.561 6.305-3.654 1.471-9.668 4.99-13.346 8.645-3.676 3.676-5.725 6.906-12.92 6.906-7.174 0-10.471-1.738-12.609-6.016-1.471-2.94-2.207-2.494-5.57-2.65-3.387-.134-14.682-.29-23.481-.134-8.8.134-11.74 1.604-15.706 4.834-3.943 3.23-5.414 5.726-12.899 3.23s-11.451-5.28-22.59-7.485c-11.162-2.205-5.146-1.181-11.897-2.651-6.75-1.448-6.305-4.679-5.413-7.329.869-2.629 3.074-6.751 1.158-12.164-1.894-5.437-1.158-11.006 3.965-11.006 5.146 0 9.981 1.025 12.03-5.726 2.05-6.75 2.651-1.47 2.05.29-.579 1.76-.869 6.594-5.414 7.33-4.545.734-5.569-.29-8.377-.29-2.784 0-3.943 1.916-2.495 5.146 1.47 3.229 3.096 6.594 2.807 9.379-.312 2.784-.602 3.81-2.651 6.46-2.05 2.629-1.76 3.966 1.916 4.835 3.653.892 10.27 2.651 16.419 4.122 6.171 1.447 6.617 1.447 17.31 4.255 10.716 2.784 13.657-2.206 14.526-8.221.891-6.016-3.23-11.741-7.04-17.467S60.2 140.396 55.209 134.38c-4.99-6.015-7.931-6.461-10.426-5.146-2.496 1.337-2.941 1.047-3.075-2.339-.156-3.364-.446-5.569 2.339-10.56 2.785-4.99 5.28-10.427 8.221-18.781 2.94-8.354 5.569-9.98 10.56-17.176 4.991-7.173 2.785-4.389 6.305-9.223 3.52-4.856 2.495-3.966 2.206-11.607-.29-7.62-.579-12.031-.869-22.012zM56.457 97.197c.758.914 1.827-1.247 2.941-2.071a3.819 3.819 0 0 0 1.203-3.498c-.111-.69-1.226-.468-1.448-.223-.69.69-.535 1.805-1.025 2.763-.557 1.158-2.428 2.094-1.671 3.029zm63.07-30.655c1.582 1.337 2.562 2.496 3.43.513.893-1.983.893-2.785-1.246-3.587-2.117-.825-3.074-1.693-4.033-2.785-.957-1.114-1.291.78-.512 2.629.957 2.273 1.514 2.54 2.361 3.23zM86.466 48.341c-1.092-.223-2.406-.134-3.142.735-.29.29-.156 1.114.356 1.337.668.29 1.114-.378 1.248-.891.067-.223.156-.512.379-.579.29-.156.713-.022 1.025-.156.357-.134.223-.446.134-.446zm5.191.201c.446.668 1.248.668 1.916.958.356.156 1.092.379 1.314-.134.513-1.626-1.693-1.114-2.718-1.114-.222 0-.735-.066-.512.29zm10.695-7.107c1.002.044 2.361 1.827 2.494 3.899.021.312.869.289 1.047-.022.469-.824.135-1.738-.088-2.718-.18-.802-1.137-1.626-1.939-1.983-.535-.268-1.092-.356-1.805-.268-.178.09-.801 1.025.291 1.092zm-21.856-.512c-.914.066-.579.779-.535 1.358 1.27.713 1.381 2.317 1.648 3.587.022.49.757.268.824.112.557-1.025-.134-2.183-.378-3.386-.223-.624-.646-1.337-1.226-1.76-.088-.089-.245.089-.333.089zm28.025-22.479c-.914-.735-2.34-1.025-2.762.178-.445 1.025-.268 2.072-.514 3.186 0 .356-.445.445-.689.779-.357.423-.268.958-.09 1.114.848.869 2.406-.847 3.543-1.448.846-.535 2.07.156 3.008-.445.266-.178.355-.602.088-.936-.601-1.047-1.648-1.648-2.584-2.428z" />
      <path fill="#000" d="M134.943 135.093c.135-.602.445-1.782 1.025-1.96.201-.067.379.022.445.223.133.378-.268 2.54-.111 3.03.178.512.779.445 1.203.312 1.002-.335 1.582-1.515 1.537-1.626 0-.045-.023-.045-.066-.045-.156.045-.291.602-.736.734-.289.09-.512.045-.602-.244-.088-.312.291-2.54.111-3.053-.154-.512-.668-.646-1.158-.49-1.092.357-1.559 2.027-1.848 3.008h-.023l.156-2.295-1.359.446-.066 4.745 1.27-.424c.023-.824.066-1.76.222-2.361zM140.826 135.605c1.09-.356 1.58-1.648 1.535-1.805-.021-.044-.043-.067-.088-.067-.09.045-.289.78-.914.98-.268.09-.512.022-.578-.155-.09-.268-.023-.735-.023-1.137l.045-2.139 1.492-.49-.021-.513-1.492.49.066-2.027-1.336.758-.068 4.522c0 .49-.043.913.045 1.137.177.58.779.647 1.337.446z" />
    </g>
  </SvgIcon>
)

export const AndroidIcon = () => (
  <SvgIcon viewBox="32.163 68.509 203.691 228.155">
    <path d="M101.885 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24z" fill="#a4c639" /><path d="M69.374 133.645c-.047.54-.088 1.086-.088 1.638v92.557c0 9.954 7.879 17.973 17.66 17.973h94.124c9.782 0 17.661-8.02 17.661-17.973v-92.557c0-.552-.02-1.1-.066-1.638H69.374z" fill="#a4c639" /><path d="M166.133 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24zM46.405 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c-.001-7.865 6.375-14.242 14.241-14.242zM221.614 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c0-7.865 6.376-14.242 14.241-14.242zM69.79 127.565c.396-28.43 25.21-51.74 57.062-54.812h14.312c31.854 3.073 56.666 26.384 57.062 54.812H69.79z" fill="#a4c639" /><path d="M74.743 70.009l15.022 26.02M193.276 70.009l-15.023 26.02" fill="none" stroke="#a4c639" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M114.878 102.087c.012 3.974-3.277 7.205-7.347 7.216-4.068.01-7.376-3.202-7.388-7.176v-.04c-.011-3.975 3.278-7.205 7.347-7.216 4.068-.011 7.376 3.2 7.388 7.176v.04zM169.874 102.087c.012 3.974-3.277 7.205-7.347 7.216-4.068.01-7.376-3.202-7.388-7.176v-.04c-.011-3.975 3.278-7.205 7.347-7.216 4.068-.011 7.376 3.2 7.388 7.176v.04z" fill="#fff" />
  </SvgIcon>
)
