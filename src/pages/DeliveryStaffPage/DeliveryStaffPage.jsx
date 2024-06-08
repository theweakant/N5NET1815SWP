import { Col, Container, Row, ButtonGroup, Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./DeliveryStaffPage.css";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function DeliveryStaffPage() {

    // Columns for "Đơn hàng cần giao"
    const deliveryColumns = [
        { id: 'orderId', label: 'Mã đơn hàng', minWidth: 100 },
        { id: 'recipient', label: 'Người nhận', minWidth: 170 },
        { id: 'address', label: 'Địa chỉ', minWidth: 200 },
        { id: 'phone', label: 'Số điện thoại', minWidth: 150 },
        { id: 'status', label: 'Tình trạng', minWidth: 100 },
        { id: 'note', label: 'Ghi chú', minWidth: 150 },
    ];

    // Columns for "Cập nhật đơn hàng"
    const updateColumns = [
        { id: 'shipmentId', label: 'Mã vận chuyển', minWidth: 100 },
        { id: 'orderId', label: 'Mã đơn hàng', minWidth: 100 },
        { id: 'recipient', label: 'Người nhận', minWidth: 170 },
        { id: 'address', label: 'Địa chỉ', minWidth: 200 },
        { id: 'phone', label: 'Số điện thoại', minWidth: 150 },
        { id: 'dateDeliver', label: 'Ngày giao hàng', minWidth: 150 },
        { id: 'payment', label: 'Tình trạng thanh toán', minWidth: 150 },
        { id: 'status', label: 'Tình trạng', minWidth: 100 },
        { id: 'note', label: 'Ghi chú', minWidth: 150 },
        { id: 'action', label: 'Hành động', minWidth: 150 },
    ];

    // Sample data for "Đơn hàng cần giao"
    const deliveryRows = [
        { orderId: 'Ord-123', recipient: 'Taylor Swift', address: '1 Nguyen Hue, Quan 1, tp HCM', phone: '0123456789', status: 'Đã ký', note: 'Đã dán địa chỉ' },
        // Add more rows as needed
    ];

    // Sample data for "Cập nhật đơn hàng"
    const updateRows = [
        { shipmentId: 'Shp-001', orderId: 'Ord-123', recipient: 'Taylor Swift', address: '1 Nguyen Hue, Quan 1, tp HCM', phone: '0123456789', dateDeliver: '2024-06-10', payment: 'Đã thanh toán', status: 'Đã giao', note: 'Không có', action: 'Cập nhật' },
        // Add more rows as needed
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [selectedTable, setSelectedTable] = React.useState('deliver'); // State to manage which table is selected

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleTableToggle = (table) => {
        setSelectedTable(table);
    };

    const columns = selectedTable === 'deliver' ? deliveryColumns : updateColumns;
    const rows = selectedTable === 'deliver' ? deliveryRows : updateRows;

    return (
        <div>
            {/* <Header/> */}
            <Container className="table-deliver">
                <ButtonGroup>
                    <Button variant="primary" onClick={() => handleTableToggle('deliver')}>Đơn hàng cần giao</Button>
                    <Button variant="secondary" onClick={() => handleTableToggle('update')}>Cập nhật đơn hàng</Button>
                </ButtonGroup>
                <h1>{selectedTable === 'deliver' ? 'ĐƠN HÀNG CẦN GIAO' : 'CẬP NHẬT ĐƠN HÀNG'}</h1>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.orderId || row.shipmentId}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Container>
            {/* <Footer/> */}
        </div>
    );
}
