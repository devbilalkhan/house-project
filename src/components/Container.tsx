const Container: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto max-w-lg xl:max-w-screen-2xl lg:max-w-screen-lg 	md:max-w-screen-md sm:max-w-screen-sm">
      {children}
    </div>
  )
}

export default Container
