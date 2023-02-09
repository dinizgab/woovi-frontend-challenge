import * as Dialog from "@radix-ui/react-dialog";

interface ConfirmationModalProps {
  parcelQuantity: number;
  parcelValue: string;
}

export default function ConfirmationModal({
  parcelQuantity,
  parcelValue,
}: ConfirmationModalProps) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="my-5 p-3 rounded-2xl w-40 bg-green hover:bg-green-hover text-lg text-white"
        >
          Confirmar
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0 z-20" />
          <Dialog.Content className="absolute p-5 bg-white rounded-xl w-4/5 max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 font-nunito">
            <Dialog.Title className="text-center text-black font-bold text-2xl">
              Confirmar número de parcelas?
            </Dialog.Title>

            <p className="font-normal text-center mt-2 mb-4 text-lg"><strong>{parcelQuantity}x</strong> de {parcelValue}</p>
            
            <div className="flex justify-around">
              <Dialog.Close className="p-2 border-2 border-red-500 text-red-500 hover:border-red-400 hover:text-red-400  rounded-2xl w-2/5">
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="p-2 border-2 border-green bg-green hover:bg-green-hover hover:border-green-hover text-white rounded-2xl w-2/5 flex items-center justify-center"
              >
                Confirmar
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
