export interface PosSettingInput {
  shopId?: string;
  numberPadFirstValue?: number;
  numberPadSecondValue?: number;
  numberPadThirdValue?: number;
  configureTipFirstPercentage?: number;
  configureTipSecondPercentage?: number;
  configureTipThirdPercentage?: number;
  configureTipFourthPercentage?: number;
  cfd?: boolean;
  cfdSettings?: {
    showShopLogo: boolean;
  };
  tipShifts?: Array<{
    name: string;
    startTime: string;
    endTime: string;
    isActive?: boolean;
  }>;
}

export interface VoidReason {
  _id?: string;
  name: string;
  reduceInventory: boolean;
  showOnReports: boolean;
  adminRequired: boolean;
  adminCode: string;
}

export interface PosTableInput {
  userId?: string;
  organizationId?: string;
  shopId?: string;
  roomId?: string;
  serverId?: string;
  tableName: string;
  tableShape: string;
  tableLink?: string;
  tableColor?: string;
  tableDimension?: {
    width?: number;
    length?: number;
    scale?: string;
  };
  seats?: Array<{
    seatNo: number;
  }>;
}

export interface PosTableModeInput {
  userId?: string;
  shopId?: string;
  organizationId?: string;
  tableNo: string;
  guestCount?: number;
  orderState?: "hold" | "stay" | "send" | "";
  serverId?: string;
  seats?: Array<{
    seatNo: number;
    category: Array<{
      category: string;
      items: Array<{
        mainDish: string;
        price: number;
        quantity: number;
        modifier: Array<{
          name: string;
          price: number;
          count: number;
        }>;
      }>;
    }>;
  }>;
  sendTime?: Date;
}

export interface PosTableOrderInput {
  tableId: string;
  userId?: string;
  organizationId?: string;
  shopId?: string;
  roomId?: string;
  tableName: string;
  seats?: any[];
  orderStatus?: string;
}