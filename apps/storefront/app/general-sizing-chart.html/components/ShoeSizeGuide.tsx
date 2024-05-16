import { shoeGuideData } from "./size-guide-data";

function ShoeSizeGuide() {
  return (
    <section className='xl:max-w-[60%]'>
      <h2 className='text-center font-sans text-2xl capitalize md:text-left'>
        Shoe Size Guide
      </h2>
      <div>
        <table className='size-guide-table hidden w-full table-auto md:table'>
          <tbody>
            {shoeGuideData.map((size) => (
              <tr
                key={`show-size-${size.size}`}
                className='odd:bg-tableGray even:bg-white'
              >
                <th
                  key={`shoe-size-guide-${size.size}`}
                  data-cell='size'
                  className='py-[10px] pl-5 pr-[10px] text-center text-sm first:font-bold'
                >
                  {size.size}
                </th>
                {size.data.map((d, index) => (
                  <td
                    key={`shoe-size-guide-${index}`}
                    className='border border-tableBorder py-[10px] pl-5 pr-[10px] text-center text-sm first:font-bold'
                  >
                    {d}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <table className='mx-auto w-full table-auto md:hidden'>
          <thead>
            <tr>
              {shoeGuideData.map((size) => (
                <th key={`show-size-${size.size}`} className='text-center'>
                  {size.size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(shoeGuideData[0]?.data.length).keys()).map(
              (n) => (
                <tr
                  key={`shoe-size-mb-row-${n}`}
                  className='odd:bg-tableGray even:bg-white'
                >
                  {Array.from(Array(shoeGuideData.length).keys()).map((i) => (
                    <td
                      key={`shoe-size-mb-cell-${n}-${i}`}
                      className='border border-tableBorder p-[10px] text-center text-sm'
                    >
                      {shoeGuideData[i]?.data[n]}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ShoeSizeGuide;
