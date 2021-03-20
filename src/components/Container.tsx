const containerSize = {
  pageContainer: 'xl:max-w-screen-2xl',
  loginPageContainer: 'xl:max-w-screen-sm',
}

interface IContainerProps {
  page?: keyof typeof containerSize
}

const Container: React.FC<IContainerProps> = ({
  children,
  page = 'pageContainer',
}) => {
  return (
    <div
      className={`container mx-auto max-w-lg ${containerSize[page]} lg:max-w-screen-lg 	md:max-w-screen-md sm:max-w-screen-sm`}
    >
      {children}
    </div>
  )
}

export default Container
