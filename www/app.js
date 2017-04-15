define("table", ["require", "exports", "react", "react-bootstrap-table"], function (require, exports, React, react_bootstrap_table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BadTable = function (props) {
        return React.createElement(react_bootstrap_table_1.BootstrapTable, { data: props.data, bordered: true, condensed: true, hover: true, exportCSV: true, options: { defaultSortName: "date", defaultSortOrder: "desc" } },
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 0, rowSpan: 2, width: "100", dataField: "date", dataSort: true, isKey: true }, "\u0414\u0430\u0442\u0430"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 0, colSpan: 2, width: "200", dataAlign: "right" }, "\u0421\u0442\u0430\u0432\u043E\u043A \u0441\u0434\u0435\u043B\u0430\u043D\u043E"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 1, width: "100", dataField: "totalBetsAmount", dataAlign: "right", dataSort: true }, "C\u0443\u043C\u043C\u0430"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 1, width: "100", dataAlign: "right", dataSort: true }, "(\u0448\u0442.)"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 0, colSpan: 2, width: "200", dataAlign: "right" }, "\u0421\u0442\u0430\u0432\u043E\u043A \u0432\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 1, width: "100", dataField: "payoutAmount", dataAlign: "right", dataSort: true }, "C\u0443\u043C\u043C\u0430"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 1, width: "100", dataField: "payoutCount", dataAlign: "right", dataSort: true }, "(\u0448\u0442.)"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 0, colSpan: 2, width: "200", dataAlign: "right" }, "\u041F\u0440\u043E\u0447\u0435\u0435"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 1, width: "150", dataField: "depositAmount", dataAlign: "right", dataSort: true }, "\u0417\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 1, width: "150", dataField: "payoutCount", dataAlign: "right", dataSort: true }, "\u0412\u044B\u043F\u043B\u0430\u0442\u044B"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 0, rowSpan: 2, width: "150", dataAlign: "right", dataSort: true }, "\u041F\u0440\u0438\u043D\u044F\u0442\u043E - \u0432\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E"),
            React.createElement(react_bootstrap_table_1.TableHeaderColumn, { row: 0, rowSpan: 2, width: "150", dataField: "activeAccounts", dataAlign: "center", dataSort: true }, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0447\u0435\u0442\u043E\u0432"));
    };
});
define("entry", ["require", "exports", "react-dom", "table"], function (require, exports, ReactDOM, table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ReactDOM.render(table_1.BadTable({ data: [] }), document.getElementById("container"));
});
