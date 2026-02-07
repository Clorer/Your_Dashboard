import ModalForm from "./ModalForm";
import ModalHeader from "./ModalHeader";

export default function ProfileModalWindow() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-124 h-148 rounded-4xl  py-8 px-8 shadow-2xl bg-[#f4f0e8]">
      <ModalHeader />
      <ModalForm />
    </div>
  );
}
