import { useState, useEffect } from 'react';
// import s from './Month.module.css';
import { fetchData } from '../../services/base';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';

export default function Month() {
  const [data, setData] = useState(null);
  const [refactoredData, setRefactoredData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      const subjects = Object.entries(data.subjects);
      subjects.forEach(subject => {
        const mAndComs = subject[1];
        const subData = data.days.map(day => {
          return {
            day,
          };
        });
        mAndComs.forEach(v => {
          subData[v[0].value - 1] = {
            ...subData[v[0].value - 1],
            [v[1].key]: v[1].value,
          };
          if (v[2]?.key) {
            subData[v[0].value - 1] = {
              ...subData[v[0].value - 1],
              [v[2].key]: v[2].value,
            };
          }
        });
        subject[1] = subData;
        setRefactoredData(subjects);
      });
    }
  }, [data]);

  async function getData() {
    const d = await fetchData();
    setData(d.response);
  }

  return (
    <div>
      {refactoredData && (
        <>
          <TableHead data={data} />
          <TableBody data={refactoredData} />
        </>
      )}
    </div>
  );
}
