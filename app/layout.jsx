import "@styles/global.css";
import Nav from "@components/Nav"
import Provider from "@components/Provider"
export const metaData = {
    title:"PROM",
    description:"DAS PROM DESCO"
}

function RootLayout({children}) {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <div className="app">
                <Nav/>
                {children}
            </div>
            

        </body>
    </html>
  )
}

export default RootLayout