import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Product } from '../interfaces/products';
import dayjs from 'dayjs';

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: '#f1f5f9',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
});

const StyledTableCell = styled(TableCell) ({
  color: '#6b7280',
});

const ProductTable = ({ product }: { product: Product }) => {
  return (
    <StyledTableContainer className='mt-12'>
      <Table>
        <TableHead>
          <TableRow className="p-4 text-gray-500 bg-white">
            <TableCell>WEEK ENDING</TableCell>
            <TableCell>RETAIL SALES</TableCell>
            <TableCell>WHOLESALE SALES</TableCell>
            <TableCell>UNITS SOLD</TableCell>
            <TableCell>RETAILER MARGIN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.sales.map((row, index) => (
            <TableRow key={index} className="bg-white p-4">
              <StyledTableCell>{dayjs(row.weekEnding).format('MM-DD-YY')}</StyledTableCell>
              <StyledTableCell>${row.retailSales.toLocaleString()}</StyledTableCell>
              <StyledTableCell>${row.wholesaleSales.toLocaleString()}</StyledTableCell>
              <StyledTableCell>{row.unitsSold.toLocaleString()}</StyledTableCell>
              <StyledTableCell>${row.retailerMargin.toLocaleString()}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ProductTable;