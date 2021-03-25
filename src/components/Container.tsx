const containerSize = {
  pageContainer: 'xl:max-w-screen-2xl',
  loginPageContainer: 'max-w-md md:max-w-screen-sm',
}

interface IContainerProps {
  page?: keyof typeof containerSize
}

const Container: React.FC<IContainerProps> = ({
  children,
  page = 'pageContainer',
}) => {
  return (
    <div className={`container mx-auto max-w-lg ${containerSize[page]}`}>
      {children}
    </div>
  )
}

export default Container
