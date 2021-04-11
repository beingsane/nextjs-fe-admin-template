import UserBillingModel from './User-Billing-Model';
import UserDeliveryInfoModel from './User-Delivery-Model';
import UserGeneralModel from './User-General-Model';

/**
 * @type UserEditModel Type definition for user edit.
 */
type UserEditModel = UserGeneralModel & {
    billingInformation?: UserBillingModel;
    deliveryInformation?: UserDeliveryInfoModel;
};

export default UserEditModel;