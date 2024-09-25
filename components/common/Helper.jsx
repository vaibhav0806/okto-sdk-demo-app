import {
  ControlAppleIcon,
  ControlDiscordIcon,
  ControlsGoogleIcon,
  ControlTelegramIcon,
  ControlWhatsappIcon,
  EthereumIcon,
  TetherIcon,
} from "./Icon";

export const socialLoginOptions = [
  { id: 0, icon: <ControlsGoogleIcon />, label: "Google", width: 128 },
  { id: 1, icon: <ControlTelegramIcon />, label: "Telegram", width: 128 },
  { id: 2, icon: <ControlAppleIcon />, label: "Apple", width: 128 },
  { id: 3, icon: <ControlWhatsappIcon />, label: "WhatsApp", width: 136 },
  { id: 4, icon: <ControlDiscordIcon />, label: "Discord", width: 136 },
];

export const cryptoToken = [
  {
    Icon: <TetherIcon />,
    name: "Tether",
    decs: "50.5 USDT",
    price: "298.98",
  },
  {
    Icon: <EthereumIcon />,
    name: "Ethereum",
    decs: "0.11 ETH",
    price: "16,001.09",
  },
];
