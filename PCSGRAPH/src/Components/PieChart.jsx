/* eslint-disable react/prop-types */
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ dataPie }) => {
  return (
    <div style={{ height: '500px' }}>
      <ResponsivePie
        data={dataPie}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.25}
        padAngle={0.7}
        cornerRadius={6}
        height={600}
        width={600}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor='#FFFFFF'
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [['darker', 2]] }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      />
    </div>
  );
};

export default PieChart;
