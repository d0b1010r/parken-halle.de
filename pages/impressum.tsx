import React from 'react';
import BackLink from '../components/BackLink';
import Layout from '../components/layout';

const SecondPage = (): JSX.Element => (
  <Layout>
    <div>
      <BackLink />
      <h3>Impressum</h3>
      <p>
        Angaben gemäß § 5 TMG:
        <br />
        <br />
      </p>
      <p>
        Immobiliengesellschaft Tiefgarage Salzgrafenplatz mbH & Co. KG
        <br />
        Am Promenadenweg 22
        <br />
        61231 Bad Nauheim
        <br />
      </p>
      <h4>Komplentär:</h4>
      <p>
        W. K. Verwaltungsgesellschaft mbH, Amtsgericht Friedberg Hessen HRB5683
      </p>
      <h4>Kontakt:</h4>
      <table className="table-text">
        <tr>
          <td>Telefon:</td>
          <td>0345 7685666</td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>mail@parken-halle.de</td>
        </tr>
      </table>
      <h4>Registereintrag:</h4>
      <p>
        Eintragung im Handelsregister. <br />
        Registergericht:Amtsgericht Friedberg (Hessen) <br />
        Registernummer: HRA3823
      </p>
      <h4>Umsatzsteuer-ID:</h4>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        <br />
        DE185177318
      </p>
      <p>
        Quelle:{' '}
        <i>
          <a
            href="http://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            eRecht24
          </a>
          , Rechtsanwalt für Internetrecht Sören Siebert
        </i>
      </p>
      <h4>Haftungsausschluss:</h4>
      <p>
        <strong>Haftung für Inhalte</strong>
      </p>{' '}
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu Überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>
      <p>
        <strong>Urheberrecht</strong>
      </p>{' '}
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
      <p>
        <strong>Datenschutz</strong>
      </p>{' '}
      <p>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder
        eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
        Zustimmung nicht an Dritte weitergegeben.{' '}
      </p>{' '}
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.{' '}
      </p>{' '}
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
        angeforderter Werbung und Informationsmaterialien wird hiermit
        ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
        ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-Mails, vor.
      </p>
      <p />
      <p>
        <i>
          Quellverweis:{' '}
          <a
            href="http://www.e-recht24.de/muster-disclaimer.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclaimer eRecht24
          </a>
        </i>
      </p>
    </div>
  </Layout>
);

export default SecondPage;
