import { FC, Ref, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  TableContainer,
  Table,
  TableRow,
  TableBody,
  CircularProgress,
  TableHead,
  TableCell,
} from '@mui/material';
import { DataStatus } from '../../common/enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchEmployees } from '../../store/actions';
import {
  selectCurrentPage,
  selectEmployees,
  selectEmployeesDataStatus,
  selectHasMoreEmployees,
} from '../../store/selectors';
import { STableBodyCell, STableRow } from './styles';

const EmployeesList: FC = () => {
  const [distanceBottom, setDistanceBottom] = useState(0);
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);
  const dataStatus = useAppSelector(selectEmployeesDataStatus);
  const hasMore = useAppSelector(selectHasMoreEmployees);
  const currentPage = useAppSelector(selectCurrentPage);
  const isLoading = dataStatus === DataStatus.PENDING;

  const tableEl = useRef<HTMLDivElement & Ref<HTMLDivElement>>(null);

  const scrollListener = useCallback(() => {
    if (tableEl) {
      let bottom = Number(tableEl.current?.scrollHeight) - Number(tableEl.current?.clientHeight);
      if (!distanceBottom) {
        setDistanceBottom(Math.round((bottom / 100) * 20));
      }
      if (Number(tableEl.current?.scrollTop) > bottom - distanceBottom && !isLoading && hasMore) {
        dispatch(fetchEmployees({ limit: 10, page: currentPage }));
      }
    }
  }, [dispatch, isLoading, distanceBottom, hasMore, currentPage]);

  useEffect(() => {
    dispatch(fetchEmployees({ limit: 10, page: 1 }));
  }, [dispatch]);

  useLayoutEffect(() => {
    const tableRef = tableEl.current;
    if (tableRef) {
      tableRef.addEventListener('scroll', scrollListener);
      return () => {
        tableRef.removeEventListener('scroll', scrollListener);
      };
    }
  }, [scrollListener]);

  return (
    <TableContainer ref={tableEl}>
      {isLoading && <CircularProgress />}
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Contacts</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Working Since</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.personsInfo.map(
            ({ id, fullName, contacts, position, dateOfHiring, birthday }) => (
              <STableRow key={id}>
                <STableBodyCell>{fullName}</STableBodyCell>
                <STableBodyCell>{birthday}</STableBodyCell>
                <STableBodyCell>
                  Email: {contacts.email}
                  <br /> Phone: {contacts.phone}
                </STableBodyCell>
                <STableBodyCell>{position}</STableBodyCell>
                <STableBodyCell>{dateOfHiring}</STableBodyCell>
              </STableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { EmployeesList };
