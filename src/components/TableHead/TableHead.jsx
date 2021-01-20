import s from './TableHead.module.css';

export default function TableHead({ data }) {
  return (
    <div className={s.container}>
      <span className={s.cell}>
        <select defaultValue={'mar'} className={s.selector}>
          <option value="jan">Січень</option>
          <option value="feb">Лютий</option>
          <option value="mar">Березень</option>
          <option value="apr">Квітень</option>
        </select>
      </span>
      {data.days.map(day => (
        <span key={day} className={s.cell}>
          {day}
        </span>
      ))}
    </div>
  );
}
