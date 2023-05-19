import React from 'react'
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

const MosGridtable = () => {

  const data = new Array(100) // number of rows
  .fill()
  .map((_, row) => new Array(50) // number of columns
    .fill()
    .map((_, column) => `${row}, ${column}`)
  );

  return (
    <div className='gridtablemain'>
      <HotTable
      data={data}
      width={'100%'}
      height={'100%'}
      z-index={'0'}
      colWidths={47}
      rowHeaders={true}
      colHeaders={true}
      contextMenu={true}
      mergeCells={[
        // { row: 1, col: 1, rowspan: 3, colspan: 3 },
      ]}
      licenseKey="non-commercial-and-evaluation"
    />
    </div>
  )
}

export default MosGridtable