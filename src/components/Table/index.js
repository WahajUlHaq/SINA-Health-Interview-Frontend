import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import "./style.scss";

const TableComponent = (props) => {
  const { data, columns, handleEdit } = props;
  const hasData = data && data.length > 0;

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <Table variant="simple">
          <Thead className="sticky-header">
            <Tr>
              {columns?.map((column, index) => (
                <Th key={index}>{column.name}</Th>
              ))}
              <Th>Option</Th>
            </Tr>
          </Thead>
          <Tbody>
            {hasData ? (
              data?.map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  {columns.map((column, columnIndex) => (
                    <Td key={columnIndex}>{row[column.dataIndex]}</Td>
                  ))}
                  <Td>
                    <Button
                      onClick={() => handleEdit(row, rowIndex)}
                      leftIcon={<EditIcon />}
                      colorScheme="blue"
                    >
                      Edit
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={columns.length + 1} className="no-data">
                  No data available
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableComponent;
