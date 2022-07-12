
import Notificationbutton from '../Notificationbutton/index.'
import './styles.css'
function Salescard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-controle-container">
                    <input className="dsmeta-form-controle" type="text" />
                </div>
                <div className="dsmeta-form-controle-container">
                    <input className="dsmeta-form-controle" type="text" />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">Id</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#001</td>
                            <td className="show576">08/07/2022</td>
                            <td>SEDAMI</td>
                            <td className="show992">15</td>
                            <td className="show992">12</td>
                            <td>R$ 3500.00</td>
                            <td>
                                <div className="dsmeta-red-botao-container">
                                    <Notificationbutton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#002</td>
                            <td className="show576">08/07/2022</td>
                            <td>SEDAMI</td>
                            <td className="show992">16</td>
                            <td className="show992">12</td>
                            <td>R$ 3500.00</td>
                            <td>
                                <div className="dsmeta-red-botao-container">
                                    <Notificationbutton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#003</td>
                            <td className="show576">08/07/2022</td>
                            <td>SEDAMI</td>
                            <td className="show992">17</td>
                            <td className="show992">13</td>
                            <td>R$ 3500.00</td>
                            <td>
                                <div className="dsmeta-red-botao-container">
                                    <Notificationbutton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Salescard