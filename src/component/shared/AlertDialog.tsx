import { Dialog, DialogProps } from "@headlessui/react";
import { VStack, HStack, ButtonSecondary, ButtonPrimary } from "../utils";
import { Icon } from "@iconify/react";

export type AlertDialogProps = {
  message?: string;
  error?: boolean;
  primaryActionText?: string;
  secondaryActionText?: string;
  status?: boolean;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
} & DialogProps;
function AlertDialog({
  message,
  error = false,
  status,
  primaryActionText = "OK",
  secondaryActionText = "Cancel",
  onPrimaryAction = () => {},
  onSecondaryAction = () => {},
  ...dialogProps
}: AlertDialogProps) {
  return (
    <Dialog {...dialogProps}>
      <VStack className="justify-between p-9 bg-white rounded h-[321px] ">
        <VStack className="items-center justify-center gap-6 grow">
          {!error ? (
            <Icon icon="ep:warning" color="#FFE99B" height={72} />
          ) : (
            <Icon icon="codicon:error" color="#ff0000" height={72} />
          )}
          <p className="text-sm font-normal text-gray-600">{message}</p>
        </VStack>
        <HStack className="justify-between gap-9">
          <ButtonSecondary
            onClick={() => onSecondaryAction()}
            className="text-gray-400 bg-slate-50"
          >
            {secondaryActionText}
          </ButtonSecondary>
          <ButtonPrimary onClick={() => onPrimaryAction()}>
            {!status ? (
              primaryActionText
            ) : (
              <Icon
                className="animate-spin"
                icon="lucide:loader-2"
                width={24}
              />
            )}
          </ButtonPrimary>
        </HStack>
      </VStack>
    </Dialog>
  );
}

export default AlertDialog;
