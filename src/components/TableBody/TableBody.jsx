import s from './TableBody.module.css';
import Popup from 'reactjs-popup';

export default function TableBody({ data }) {
  function rand() {
    return Math.floor(110 + Math.random() * 256);
  }

  return (
    <>
      {data.map(subject => {
        return (
          <div
            className={s.container}
            style={{ backgroundColor: `rgb(${rand()},${rand()},${rand()})` }}
            key={subject[0]}
          >
            <span className={s.cell}>{subject[0]}</span>
            {subject[1].map(day => (
              <span key={day.day} className={s.cell}>
                {day.mark && (
                  <Popup
                    trigger={
                      <span type="button" className={s.mark}>
                        {day.mark}
                      </span>
                    }
                    position={['top center', 'bottom right', 'bottom left']}
                    closeOnDocumentClick
                  >
                    {day.comment ?? 'Коментариев нету'}
                  </Popup>
                )}
              </span>
            ))}
          </div>
        );
      })}
    </>
  );
}
