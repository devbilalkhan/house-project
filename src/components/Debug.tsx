import React from 'react'
import Container from './Container'

interface DebugProps {
  jsonName?: string[]
}
const objectName = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et',
  },
  {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body:
      'quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione',
  },
]

const Debug: React.FC<DebugProps> = ({ jsonName = objectName }) => {
  const [toggleDrawer, setToggleDrawer] = React.useState<boolean>(false)
  console.log()

  return (
    <Container>
      <div className="flex flex-row-reverse w-full bg-[#1b2440] rounded rounded-b-none">
        <div className="flex w-full justify-between px-6 py-3">
          <h2 className="text-gray-600 font-semibold">Debug</h2>
          <button
            className="w-6"
            onClick={() => setToggleDrawer(!toggleDrawer)}
          >
            {toggleDrawer ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#ff8c64"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#97ed8a"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-[#233142] shadow-2xl rounded rounded-t-none px-12 py-6">
        {toggleDrawer ? (
          <pre className="text-green-400 w-full whitespace-pre-wrap">
            <span className="text-red-400">
              {Object.keys({ jsonName })[0]} ={' '}
            </span>
            {JSON.stringify(jsonName, null, 2)}
          </pre>
        ) : null}
      </div>
    </Container>
  )
}

export default Debug
