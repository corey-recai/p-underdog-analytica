import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class CompetitionComparison extends Component {
  render() {
    return (
      <>
        <Table
          className="mx-auto"
          responsive
          striped
          bordered
          hover
          // variant="dark"
        >
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Underdog Analytica</th>
              <th className="text-center">#BettingTwitter</th>
              <th className="text-center">Action Network(Football)</th>
              <th className="text-center">"Experts" at Sportsmemo.com</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Transparent results before payment</td>
              <td className="text-center">YES</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
              <td className="text-center">YES</td>
            </tr>
            <tr>
              <td>Data driven predictions</td>
              <td className="text-center">YES</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
            </tr>
            <tr>
              <td>Portfolio Manager</td>
              <td className="text-center">YES</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
            </tr>
            <tr>
              <td>Monthly cost</td>
              <td className="text-center">&euro;0 - &euro;15</td>
              <td className="text-center">&euro;25 - &euro;300</td>
              <td className="text-center">&euro;60</td>
              <td className="text-center">&euro;200</td>
            </tr>
            <tr>
              <td>Integrity promise</td>
              <td className="text-center">YES</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
            </tr>
            <tr>
              <td>Curated news feed</td>
              <td className="text-center">YES</td>
              <td className="text-center">NO</td>
              <td className="text-center">YES</td>
              <td className="text-center">NO</td>
            </tr>
            <tr>
              <td>Consistent free picks</td>
              <td className="text-center">YES</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
            </tr>
            <tr>
              <td>Bet archive</td>
              <td className="text-center">YES</td>
              <td className="text-center">NO</td>
              <td className="text-center">NO</td>
              <td className="text-center">YES</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
