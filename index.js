import device from './utils/device';
import fmoney from './utils/fmoney';
import local from './utils/local';
import times from './utils/times';
import utils from './utils/utils';
import validate from './utils/validate';
import watermark from './utils/watermark';

export default {
  ...device,
  ...fmoney,
  ...local,
  ...times,
  ...utils,
  ...validate,
  ...watermark,
};
