import TRTC from "trtc-js-sdk";

const $TRTC = {
  async getDeviceList(deviceType) {
    let deviceList
    switch (deviceType) {
      case 'camera':
        deviceList = await TRTC.getCameras();
        break;
      case 'microphone':
        deviceList = await TRTC.getMicrophones();
        break;
      case 'speaker':
        deviceList = await TRTC.getSpeakers();
        break;
      default:
        break;
    }
    // [this.activeDevice] = this.deviceList;
    // this.activeDeviceId = this.deviceList[0].deviceId;
    // this.$emit('change', this.activeDeviceId);
    return deviceList
  },
}
export default $TRTC