import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TablePrice = styled('table')`
  width: 100%;
  border-collapse: collapse;
  font-size: inherit;
  td {
    padding: 0;
    border-width: 0;
  }
`;
const TDPrice = styled('td')`
  text-align: right;
`;

const TDAdditionalInfo = styled('td')`
  text-align: right;
  font-size: 12px;
  color: #999;
`;

type PriceRow = {
  label: string;
  price: string;
};
function PriceRow({ label, price }: PriceRow): JSX.Element {
  return (
    <tr>
      <td>{label}</td>
      <TDPrice>{price}</TDPrice>
    </tr>
  );
}
PriceRow.propTypes = {
  label: PropTypes.string,
  price: PropTypes.string,
};

type PriceSectionProps = {
  title: string;
  children: ReactNode;
  hint?: string;
};

function PriceSection({
  title,
  children,
  hint,
}: PriceSectionProps): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      <TablePrice>
        <tbody>{children}</tbody>
        {hint ? (
          <tfoot>
            <tr>
              <TDAdditionalInfo colSpan={2}>{hint}</TDAdditionalInfo>
            </tr>
          </tfoot>
        ) : null}
      </TablePrice>
    </div>
  );
}
PriceSection.propTypes = {
  title: PropTypes.string,
  hint: PropTypes.string,
  children: PropTypes.any,
};

function PriceTable(): JSX.Element {
  return (
    <div>
      <PriceSection title="Preise Tiefgarage Spitze">
        <PriceRow label="je angef. 45 min " price="1,&ndash; &euro;" />
        <PriceRow
          label="nach 3 Stunden je angef. Stunde"
          price="1,&ndash; &euro;"
        />
        <PriceRow label="Tageshöchstsatz (24h)" price="9,&ndash; &euro;" />
        <PriceRow label="Dauerparkplätze" price="ab 90,&ndash; &euro;" />
        {/*<PriceRow label="Sondertickets" price="auf Anfrage" />*/}
      </PriceSection>
    </div>
  );
}

export default PriceTable;
