import { YMaps, Map,Placemark } from '@pbe/react-yandex-maps';

const ContactMap = () => (
<div className='ContactMap'>
   <YMaps>
  <Map
    defaultState={{
      center: [59.830291, 30.143796],
      zoom: 9,
    }}
  >
    <Placemark geometry={[59.830291, 30.143796]} />
  </Map>
</YMaps>
</div>
);
export default ContactMap;