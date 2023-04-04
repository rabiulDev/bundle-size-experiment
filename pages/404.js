import Error from 'next/error'
export default function Custom404() {
      return (
            <div className={'h-screen w-full error-page'}>
                  <Error statusCode={404} />
            </div>
      )
}
