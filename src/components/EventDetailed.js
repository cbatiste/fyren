import {useState} from "react";
import Image from 'next/image';
import LineupOverlay from "components/LineupOverlay";

export default function EventDetailed(props) {
  const {
    title,
    poster,
    details = [],
    artistLineup = [],
    DJLineup = []
  } = props;

  let [lineupVisible, setLineupVisible] = useState(false);

  return (
    <div className={'flex flex-col md:flex-row justify-center py-12'}>
      <div className={'flex order-2 mt-6 md:m-0 md:mr-6 md:order-1 flex-col justify-center flex-1 text-center'}>
        <h2 className={'text-4xl'}>{title}</h2>

        <a className={'block md:hidden text-xl font-semibold text-sky-500 cursor-pointer hover:text-sky-700 mt-3'} onClick={() => setLineupVisible(true)}>View Lineup</a>
        <LineupOverlay
          title={title}
          artistLineup={artistLineup}
          DJLineup={DJLineup}
          visible={lineupVisible}
          onClose={() => setLineupVisible(false)}
        />

        <div className={'pt-5'}>
          {details.map((detail, i) => (
            <p key={i} className={'mb-2'}>{detail.key}: {detail.value}</p>
          ))}
        </div>
      </div>
      <div className={'order-1 md:order-2 md:w-[240px] lg:w-[300px] max-w-[300px] self-center'}>
        <Image src={poster} alt={`Poster for event ${title}`} width={0} height={0} style={{width: '100%', height: 'auto'}} />
      </div>
      <div className={'flex order-3 md:ml-6 flex-col flex-1 text-center md:pt-8'}>
        <div className={'hidden md:block'}>
          {artistLineup.length &&
            <div className={'pb-8'}>
              <h3 className={'font-bold text-xl'}>LINEUP</h3>
              {artistLineup.map((artist, i) => <p key={i}>{artist}</p>)}
            </div>
          }
          {DJLineup.length &&
            <div className={'pb-8'}>
              <h3 className={'font-bold text-xl'}>DJ LINEUP</h3>
              {DJLineup.map((artist, i) => <p key={i}>{artist}</p>)}
            </div>
          }
        </div>
        <div>
          <button className={'border-slate-900 mt-4 md:m-0 border-2 rounded px-4 py-2 text-xl'}><h6>BUY TICKETS</h6></button>
        </div>
      </div>
    </div>
  );
}