import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export interface BadTableProps {
    data: any[]
}

export const BadTable = (props: BadTableProps) =>
    <BootstrapTable data={props.data} bordered condensed hover exportCSV
        options={{ defaultSortName: "date", defaultSortOrder: "desc" }}>
        <TableHeaderColumn row={0} rowSpan={2} 
            width="100" dataField="date" dataSort={true} isKey={true}>Дата</TableHeaderColumn>

        <TableHeaderColumn row={0} colSpan={2} width="200"
            dataAlign="right">Ставок сделано</TableHeaderColumn>
        <TableHeaderColumn row={1} width="100" dataField="totalBetsAmount" 
            dataAlign="right" dataSort={true}>Cумма</TableHeaderColumn>
        <TableHeaderColumn row={1} width="100" 
            dataAlign="right" dataSort={true}>(шт.)</TableHeaderColumn>

        <TableHeaderColumn row={0} colSpan={2} width="200"
            dataAlign="right">Ставок выплачено</TableHeaderColumn>
        <TableHeaderColumn row={1} width="100" dataField="payoutAmount" 
            dataAlign="right" dataSort={true}>Cумма</TableHeaderColumn>
        <TableHeaderColumn row={1} width="100" dataField="payoutCount" 
            dataAlign="right" dataSort={true}>(шт.)</TableHeaderColumn>

        <TableHeaderColumn row={0} colSpan={2} width="200"
            dataAlign="right">Прочее</TableHeaderColumn>
        <TableHeaderColumn row={1} width="150" dataField="depositAmount" 
            dataAlign="right" dataSort={true}>Зачисления</TableHeaderColumn>
        <TableHeaderColumn row={1} width="150" dataField="payoutCount" 
            dataAlign="right" dataSort={true}>Выплаты</TableHeaderColumn>
        <TableHeaderColumn row={0} rowSpan={2} width="150"
            dataAlign="right" dataSort={true}>Принято - выплачено</TableHeaderColumn>
        <TableHeaderColumn row={0} rowSpan={2} width="150" dataField="activeAccounts" 
            dataAlign="center" dataSort={true}>Активных счетов</TableHeaderColumn>
    </BootstrapTable>;
