"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modale";
import { Modal } from "@/components/ui/modal";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const fromSchema = z.object({
    name: z.string().min(1),
});

export const StoreModel = () => {
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof fromSchema>>({
        resolver: zodResolver(fromSchema),
        defaultValues: {
            name: "",
        },
    });
    const snSubmit = async (values: z.infer<typeof fromSchema>) => {
        console.log(values);
        //TODO: Create Store
    }
    return (
        <Modal
            title="Create store"
            description="add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(snSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="E-commerce" {...field} />
                                        </FormControl>
                                        <FormMessage>

                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button
                                    variant="outline"
                                    onClick={storeModal.onClose}>
                                    Cancel
                                </Button>
                                <Button type="submit">
                                    Continue
                                </Button>
                            </div>


                        </form>

                    </Form>

                </div>
            </div>
        </Modal>
    );
};