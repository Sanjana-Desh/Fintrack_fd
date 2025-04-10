import style from '../stylesheets/StatsTable.module.css';
function StatsTable(props){
    const creditSum=props.dataByMonth.map((ele)=>{return ele.credit}).reduce((sum,ele)=>sum+ele,0);
    const dedbitSum=props.dataByMonth.map((ele)=>{return ele.debit}).reduce((sum,ele)=>sum+ele,0);
    const net=creditSum-dedbitSum;
    return (
        <table className={style.statsTable}>
            <thead>
            <tr>
                <th>Date</th>
                <th>Credit</th>
                <th>Debit</th>
                <th>Net</th>
            </tr>
            </thead>
            <tbody>
            {props.dataByMonth.map((ele)=>{return <tr key={ele.date}><td>{ele.date}</td><td>{ele.credit}</td><td>{ele.debit}</td><td>{ele.net}</td></tr>})}
            </tbody>
            <tfoot>
            <tr className={style.total}>
                <td>Total</td>
                <td>{creditSum}</td>
                <td>{dedbitSum}</td>
                <td>{net}</td>
            </tr>
            </tfoot>
        </table>
    );
}

export default StatsTable;