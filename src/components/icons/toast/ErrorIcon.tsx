const ErrorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <g>
        <path
          d="M18.3007 6.20997C17.9107 5.81997 17.2807 5.81997 16.8907 6.20997L12.0007 11.09L7.1107 6.19997C6.7207 5.80997 6.0907 5.80997 5.7007 6.19997C5.3107 6.58997 5.3107 7.21997 5.7007 7.60997L10.5907 12.5L5.7007 17.39C5.3107 17.78 5.3107 18.41 5.7007 18.8C6.0907 19.19 6.7207 19.19 7.1107 18.8L12.0007 13.91L16.8907 18.8C17.2807 19.19 17.9107 19.19 18.3007 18.8C18.6907 18.41 18.6907 17.78 18.3007 17.39L13.4107 12.5L18.3007 7.60997C18.6807 7.22997 18.6807 6.58997 18.3007 6.20997Z"
          fill="white"
        />
      </g>
      <defs>
        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
      </defs>
    </svg>
  )
}

export default ErrorIcon
