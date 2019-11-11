import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';

import { Container,ProductTable,Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-7YYU-IKf8v5MNmyycze0M-Wu-Wh3banB1b4C_-Yks6BkxN6AFHh9AF8VDuuIKoUduY94MzV2fuMUTlE25UL6K9oiDnncaHYNjo0ZBkmZpiZPyPWFcuAb&usqp=CAE"
                 alt="Tênis"/>
              </td>
              <td>
                <strong>Tenis show de bola</strong>
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                <button type="button">
                <MdRemoveCircleOutline size={20} color="#404040"/>
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                <MdAddCircleOutline size={20} color="#404040"/>
                </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#404040" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar Pedido</button>
          <Total>
            <span>Total</span>
            <strong>R$ 1920,28 </strong>
            </Total>
        </footer>
      </Container>
  );
}
