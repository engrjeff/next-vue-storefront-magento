import { conversionChartData } from "./size-guide-data";

function ConversionChart() {
  return (
    <section className='md:hidden'>
      <h2 className='text-center font-sans text-2xl capitalize md:text-left'>
        Conversion Chart
      </h2>

      <div className='max-w-full'>
        <table className='size-guide-table w-full table-auto'>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>AU</th>
              <th>US</th>
              <th>UK</th>
              <th>EU</th>
            </tr>
          </thead>
          <tbody>
            {conversionChartData.map((cc) => (
              <tr
                key={`conversion-chart-${cc.size}`}
                className='odd:bg-tableGray even:bg-white'
              >
                {Object.keys(cc).map((key, index) => (
                  <td
                    key={`conversion-chart-${cc.size}-${key}-${index}`}
                    data-cell={key}
                    data-cellindex={index}
                    className='border-y border-y-tableBorder py-[10px] pl-5 pr-[10px] text-sm first:border-x first:font-bold  last:border-b last:border-r last:border-b-tableBorder'
                  >
                    {cc[key as keyof typeof cc]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ConversionChart;
