import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer"
import "@/src/app/globals.css";
import React from "react";

export default function RootLayout(
  {children}:{children:React.ReactNode}){
    return(
      <html lang="es">
        <body>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    );
  }