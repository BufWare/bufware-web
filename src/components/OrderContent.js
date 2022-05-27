import React from "react"

export default function OrderContent({order}){
    return(
        <tr className="dropDown">
            <td colSpan="8">
                <table>
                    <tbody>
                        {order.obsah.map(product => {
                                return (
                                    <tr>
                                        <td>#{product.id}</td>
                                        <td>{product.pocet} ks</td>
                                        <td>{product.nazev}</td>
                                    </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </td>
        </tr>
    )
}