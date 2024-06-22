import { Icon } from "@iconify/react";
import * as React from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
type SecondaryCTAButtonProps = {
  buttonSize?: ButtonSize;
  className?: string;
} & ButtonProps;
type PrimaryCTAButtonProps = {
  buttonSize?: ButtonSize;
  className?: string;
} & ButtonProps;

export enum ButtonSize {
  SMALL = "px-2 py-1.5 text-xs1 leading-[18px]",
  MEDIUM = "px-3 py-2.5 text-xs2 leading-4",
}
export function HStack(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `flex flex-row ${props.className}`;
  return <div {...props} className={className}></div>;
}

export function VStack(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `flex flex-col ${props.className}`;
  return <div {...props} className={className}></div>;
}

export function Center(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `flex items-center justify-center ${props.className}`;
  return <div {...props} className={className}></div>;
}

export function Box(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `${props.className}`;
  return <div {...props} className={className}></div>;
}

export function ButtonPrimary({
  disabled,
  className,
  type = "button",
  buttonSize = ButtonSize.SMALL,
  ...rest
}: PrimaryCTAButtonProps): React.ReactElement {
  const _type = type || "button";
  const _className = `inline-flex items-center ${buttonSize} rounded-sm border border-transparent  whitespace-nowrap font-semibold text-white drop-shadow-box focus:outline-none ${className} ${
    disabled
      ? "cursor-not-allowed bg-gray-300 hover:bg-gray-300"
      : "bg-orange-p hover:bg-orange-500 cursor-pointer"
  } `;

  return (
    <button
      disabled={disabled}
      className={_className}
      type={_type}
      {...rest}
    ></button>
  );
}

export function ButtonPrimary1({
  className,
  disabled = false,
  type = "button",
  buttonSize = ButtonSize.SMALL,
  ...rest
}: SecondaryCTAButtonProps): React.ReactElement {
  const _type = type || "button";
  const _className = `inline-flex bg-transparent items-center ${buttonSize} rounded-sm border border-primary  whitespace-nowrap font-semibold text-primary drop-shadow-box hover:bg-primary/20 focus:outline-none ${className} ${
    disabled
      ? "cursor-not-allowed bg-gray-300 hover:bg-gray-300"
      : "bg-orange-p hover:bg-orange-500 cursor-pointer"
  } `;

  return <button {...rest} className={_className} type={_type}></button>;
}

export function ButtonSecondary({
  className,
  type = "button",
  disabled = false,
  buttonSize = ButtonSize.SMALL,
  ...rest
}: PrimaryCTAButtonProps): React.ReactElement {
  const _type = type || "button";
  const _className = `inline-flex items-center border border-[#F9F9F9] ${buttonSize} rounded-md border border-transparent bg-tertiaryBg whitespace-nowrap font-semibold text-tertiaryText drop-shadow-box hover:bg-tertiaryBgHover focus:outline-none ${className} ${
    disabled
      ? "cursor-not-allowed bg-gray-300 hover:bg-gray-300"
      : "bg-orange-p hover:bg-orange-500 cursor-pointer"
  } `;
  return <button {...rest} className={_className} type={_type}></button>;
}

export function ButtonCancelSecondary(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
): React.ReactElement {
  const { className, type, ...rest } = props;
  const _type = type || "button";
  const _className = `p-2 font-normal rounded h-8 text-gray-dark text-sm1 bg-gray-light focus:opacity-90 hover:bg-gray-100 ${className}`;
  return <button {...rest} className={_className} type={_type}></button>;
}

export function Error({ text }: { text?: string }) {
  return <p className="text-[9px] text-red-500 my-0.5">{text}</p>;
}

export function SecondaryCTAButton({
  className,
  type = "button",
  buttonSize = ButtonSize.MEDIUM,
  ...rest
}: SecondaryCTAButtonProps): React.ReactElement {
  const buttonClassName = `inline-flex bg-transparent items-center cursor-pointer ${buttonSize} rounded-sm border border-primary  whitespace-nowrap font-semibold text-primary drop-shadow-box hover:bg-primary/20 focus:outline-none ${className}`;
  return <button {...rest} className={buttonClassName} type={type} />;
}

export function PrimaryCTAButton({
  className,
  type = "button",
  buttonSize = ButtonSize.MEDIUM,
  ...rest
}: PrimaryCTAButtonProps): React.ReactElement {
  const buttonClassName = `inline-flex items-center cursor-pointer ${buttonSize} rounded-sm border border-transparent bg-primary hover:bg-primaryHover  whitespace-nowrap font-semibold text-white drop-shadow-box hover:bg-primary/70 focus:outline-none ${className}`;
  return <button {...rest} className={buttonClassName} type={type} />;
}
export function TertiaryCTAButton({
  className,
  type = "button",
  buttonSize = ButtonSize.MEDIUM,
  ...rest
}: PrimaryCTAButtonProps): React.ReactElement {
  const buttonClassName = `inline-flex items-center border border-[#F9F9F9] cursor-pointer ${buttonSize} rounded-md border border-transparent bg-tertiaryBg whitespace-nowrap font-semibold text-tertiaryText drop-shadow-box hover:bg-tertiaryBgHover focus:outline-none ${className}`;
  return <button {...rest} className={buttonClassName} type={type} />;
}

type LoaderButtonProps = {
  buttonSize?: ButtonSize;
  className?: string;
} & ButtonProps;
export function LoaderCTAButton({
  className,
  type = "button",
  buttonSize = ButtonSize.MEDIUM,
  ...rest
}: LoaderButtonProps): React.ReactElement {
  const _className = `inline-flex items-center cursor-not-allowed ${buttonSize} rounded-sm border border-transparent bg-primary px-3 py-2.5 text-sm font-medium leading-4 text-white drop-shadow-box hover:bg-primary/70 ${className}`;
  return (
    <button {...rest} className={_className} type={type} disabled>
      <HStack>
        <p className="indicator-progress" style={{ display: "block" }}>
          Please wait
        </p>
        <Icon className="ml-2 animate-spin" icon="lucide:loader-2" width={18} />
      </HStack>
    </button>
  );
}
