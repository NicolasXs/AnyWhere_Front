import { useState } from "react";
import InputMask from "react-input-mask";
import Apartamento from ".././img/LocalDescription/Apartamento.svg";
import Casa from ".././img/LocalDescription/Casa.svg";
import Hotel from ".././img/LocalDescription/Hotel.svg";
import Pousada from ".././img/LocalDescription/Pousada.svg";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  cpf: z.string({ invalid_type_error: "Please enter a valid CPF." }),
  cnpj: z.string({ invalid_type_error: "Please enter a valid CNPJ." }),
  email: z.string({ message: "Please enter a valid email." }),
  telefone: z.string({
    invalid_type_error: "Please enter a valid phone number.",
  }),
  razaoSocial: z.string(),
  inscricaoEstadual: z.string(),
  dataNascimento: z.string(),
  dataFundacao: z.string(),
  cnae: z.string(),
});

export default function SpaceDescription() {
  const [selectedDescription, setSelectedDescription] = useState<number | null>(
    null
  );
  const [selectDescriptionValue, setSelectDescriptionValue] = useState("");
  const handleDescriptionClick = (index: number, item: string) => {
    setSelectedDescription(index);
    setSelectDescriptionValue(item);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cpf: "",
      cnpj: "",
      cnae: "",
      email: "",
      telefone: "",
      razaoSocial: "",
      inscricaoEstadual: "",
      dataNascimento: "",
      dataFundacao: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className={`mt-20 text-center`}>
      <p className="text-2xl mb-10 font-[Poppins]">
        Qual das seguintes opções descreve melhor seu espaço?
      </p>
      <div className="flex justify-center items-center gap-8">
        {[
          { img: Casa, label: "Casa" },
          { img: Apartamento, label: "Apartamento" },
          { img: Pousada, label: "Pousada" },
          { img: Hotel, label: "Hotel" },
        ].map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center w-48 font-[inter] bg-white border border-solid border-gray-300 rounded-lg p-6 transition duration-300 ease-in-out hover:border-opacity-25 hover:border-red-500 hover:transform hover:scale-110 ${
              selectedDescription === index
                ? "border-red-300 border-2 font-semibold "
                : ""
            }`}
            type="button"
            onClick={() => handleDescriptionClick(index, item.label)}
          >
            <img src={item.img} alt={item.label} className="w-17 h-16 mb-2" />
            <span
              className={`${
                selectedDescription === index ? "text-red-500" : "text-black"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
      <input
        type="hidden"
        name="spaceDescription"
        value={selectDescriptionValue}
      />

      <div className="mt-4" hidden={selectedDescription === null}>
        <p className="text-lg text-center font-[poppins]">
          Precisamos que preencha algumas informações
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="mt-4 text-center flex justify-center items-center w-full h-full flex-col">
              <div
                className={`flex flex-col w-1/6 ${
                  selectedDescription === 0 || selectedDescription === 1
                    ? ""
                    : "hidden"
                }`}
              >
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mb-4">
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        CPF
                      </FormLabel>
                      <FormControl>
                        <InputMask
                          mask="999.999.999-99"
                          placeholder="CPF"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mb-4">
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        Telefone
                      </FormLabel>
                      <FormControl>
                        <InputMask
                          mask="(99) 99999-9999"
                          placeholder="Telefone"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dataNascimento"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mb-4">
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        Data de Nascimento
                      </FormLabel>
                      <FormControl>
                        <input
                          type="date"
                          placeholder="Data de Nascimento"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div
                className={`grid grid-cols-2 gap-4 w-1/2 ${
                  selectedDescription === 2 || selectedDescription === 3
                    ? ""
                    : "hidden"
                }`}
              >
                <FormField
                  control={form.control}
                  name="cnpj"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium text-gray-600">
                        CNPJ
                      </FormLabel>
                      <FormControl>
                        <InputMask
                          mask="99.999.999/9999-99"
                          placeholder="XX. XXX. XXX/0001-XX"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="razaoSocial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        Razão Social
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: Louças Brasil LTDA"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="inscricaoEstadual"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        Inscrição Estadual
                      </FormLabel>
                      <FormControl>
                        <InputMask
                          mask="999.999.999-999"
                          placeholder="XXX. XXX. XXX. XXX"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        E-mail
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="email"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mb-4">
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        Telefone
                      </FormLabel>
                      <FormControl>
                        <InputMask
                          mask="(99) 99999-9999"
                          placeholder="Telefone"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cnae"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mb-4">
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        CNAE
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md w-full">
                            <SelectValue placeholder="Selecione o CNAE" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="7020-4/00">
                              Consultoria administrativa
                            </SelectItem>
                            <SelectItem value="6911-7/01">
                              Consultoria jurídica
                            </SelectItem>
                            <SelectItem value="5611-2/02">
                              Bares e outros estabelecimentos especializados em
                              servir bebidas
                            </SelectItem>
                            <SelectItem value="5611-2/05">
                              Bares e outros estabelecimentos especializados em
                              servir bebidas, com entretenimento
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dataFundacao"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mb-4">
                      <FormLabel className="block text-lg font-medium text-gray-600">
                        Data de Fundação
                      </FormLabel>
                      <FormControl>
                        <input
                          type="date"
                          placeholder="Data de Fundação"
                          {...field}
                          className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
