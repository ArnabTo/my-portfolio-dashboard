'use client';
import React from 'react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import axios from 'axios';
import { useToast } from './ui/use-toast';
const ProjectForm = () => {

    const { toast } = useToast();
    const form = useForm({
        defaultValues: {
            title: '',
            about: '',
            image: '',
            technologies: [],
            github: '',
            live: '',
            description: '',
        }
    });


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/post-projects', data);
            console.log('Response:', response);

            if(response?.data?.success){
                toast({
                    title: 'Success',
                    description: 'Project was uploaded successfully',
                    variant: 'default',
                })
            }else{
                toast({
                    title: 'Failed',
                    description: response.data.message,
                    variant: 'destructive',
                })
            }
        } catch (error) {
           toast({
               title: 'Error',
               description: error.message,
               variant: 'destructive',
           })
        }
    };

    return (
        <div className='max-w-6xl mx-auto'>
            <div>
                <h1 className='text-white text-5xl font-extrabold text-center my-10'>My Personal <span className="font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Dashboard</span></h1>
            </div>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-1/2 mx-3 md:mx-auto space-y-8 border-white border-2 px-5 py-8 rounded-lg">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>📃Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="about"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>📝 About</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>📝 Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>🖼️ Thumbnail</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="github"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>🔗 GitHub link</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="live"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>🔗 Preview link</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="technologies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>⚙️ Tech Stack</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div class="p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg">
                        <div class="bg-gray-900 text-white rounded-lg p-4">
                            <Button className="w-full bg-zinc-800" type="submit">Submit</Button>
                        </div>
                    </div>

                </form>
            </Form>

        </div>
    );
};

export default ProjectForm;