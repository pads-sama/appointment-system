import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import Textarea from "@/Components/Textarea";
import PrimaryButton from "@/Components/PrimaryButton";
import BackButton from "@/Components/BackButton";
import InputError from "@/Components/InputError";

export default function MedicalChartForm({ auth, medicalChart }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        name: auth.user.name,
        gender: "",
        age: "",
        height: "",
        weight: "",
        bp: "",
        illness: "",
        physical_exam: "",
        medical_history: "",
        allergies: "",
        family_history: "",
        social_history: "",
        diagnosis: "",
        plan: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("medical-chart.store"));
    };
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const medicalForMedicalChart =
        medicalChart && medicalChart.user_id === auth.user.id;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full">
                    <h2 className="font-semibold text-lg md:text-xl text-gray-800 leading-tight">
                        Create Medical Chart
                    </h2>
                </div>
            }
        >
            <Head title="Medical Chart" />

            {medicalForMedicalChart ? (
                <div className="w-full h-96 flex flex-col items-center justify-center">
                    <h1 className="text-gray-500 font-semibold">
                        You can Only Submit one Medical chart
                    </h1>
                    <BackButton href="/medical-chart">Back</BackButton>
                </div>
            ) : (
                <div className=" mt-5 mx-5 md:mx-20 md:py-5  border border-red-100 drop-shadow-lg rounded-md font-opensans bg-white text-gray-800">
                    <form onSubmit={handleSubmit}>
                        <div className="md:pl-20 px-5 py-3 md:flex ">
                            <div className="md:w-[55vw]">
                                <div className="hidden">
                                    <InputLabel htmlFor="user_id" value="" />
                                    <TextInput
                                        type="text"
                                        id="user_id"
                                        name="user_id"
                                        value={data.user_id}
                                        className="w-full"
                                        placeholder="Name"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="w-full"
                                        placeholder="Name"
                                        onChange={handleOnChange}
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="md:flex md:space-x-5 mt-5">
                                    {/* gender */}
                                    <div className="w-full ">
                                        <div>
                                            <InputLabel
                                                htmlFor="gender"
                                                value="Gender"
                                            />
                                            <select
                                                name="gender"
                                                id="gender"
                                                onChange={(e) =>
                                                    setData(
                                                        "gender",
                                                        e.target.value
                                                    )
                                                }
                                                value={data.gender}
                                                className="slide-up w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                            >
                                                <option value="default">
                                                    --Select Gender--
                                                </option>
                                                <option value="male">
                                                    Male
                                                </option>
                                                <option value="female">
                                                    Female
                                                </option>
                                            </select>
                                            <InputError
                                                message={errors.gender}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    {/* age */}
                                    <div className="w-full mt-5 md:mt-0">
                                        <div className="w-full">
                                            <InputLabel
                                                htmlFor="age"
                                                value="Age"
                                            />
                                            <TextInput
                                                id="age"
                                                name="age"
                                                className="w-full"
                                                value={data.age}
                                                placeholder="Age"
                                                onChange={handleOnChange}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.age}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:space-x-5 md:space-y-0 space-y-5 mt-5 w-full">
                                    {/* height */}
                                    <div className="">
                                        <div className="">
                                            <InputLabel
                                                htmlFor="height"
                                                value="Height"
                                            />
                                            <TextInput
                                                id="height"
                                                name="height"
                                                className="w-full"
                                                value={data.height}
                                                placeholder="Height"
                                                onChange={handleOnChange}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.height}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* weight */}
                                    <div className="">
                                        <div className="">
                                            <InputLabel
                                                htmlFor="weight"
                                                value="Weight"
                                            />
                                            <TextInput
                                                id="weight"
                                                name="weight"
                                                className="w-full"
                                                value={data.weight}
                                                placeholder="Weight"
                                                onChange={handleOnChange}
                                            />
                                            <InputError
                                                message={errors.weight}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <InputLabel
                                                htmlFor="bp"
                                                value="Blood Pressure"
                                            />
                                            <TextInput
                                                id="bp"
                                                name="bp"
                                                className="w-full"
                                                value={data.bp}
                                                placeholder="Blood Pressure"
                                                onChange={handleOnChange}
                                            />
                                            <InputError
                                                message={errors.bp}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* illness */}
                                <div className="mt-5">
                                    <InputLabel
                                        htmlFor="illness"
                                        value="Illness"
                                    />
                                    <Textarea
                                        name="illness"
                                        id="illness"
                                        className="w-full"
                                        placeholder="Enter you illnesses here"
                                        value={data.illness}
                                        onChange={handleOnChange}
                                    />
                                    <InputError
                                        message={errors.illness}
                                        className="mt-2"
                                    />
                                </div>
                                {/* physical exam */}
                                <div className="mt-5">
                                    <InputLabel
                                        htmlFor="physical_exam"
                                        value="Physical Exam"
                                    />
                                    <Textarea
                                        name="physical_exam"
                                        id="physical_exam"
                                        value={data.physical_exam}
                                        className="w-full"
                                        placeholder="Physical exam"
                                        onChange={handleOnChange}
                                    />
                                    <InputError
                                        message={errors.physical_exam}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:px-20 space-y-5 md:space-y-0">
                                <div className="md:flex md:space-x-5">
                                    {/* medical history */}
                                    <div className="w-full">
                                        <InputLabel
                                            htmlFor="medical_history"
                                            value="Medical History"
                                        />
                                        <Textarea
                                            name="medical_history"
                                            id="medical_history"
                                            value={data.medical_history}
                                            className="w-full"
                                            placeholder="Medical history"
                                            onChange={handleOnChange}
                                        />
                                        <InputError
                                            message={errors.medical_history}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* allergies */}
                                    <div className="w-full">
                                        <InputLabel
                                            htmlFor="allergies"
                                            value="Allergies"
                                        />
                                        <Textarea
                                            name="allergies"
                                            id="allergies"
                                            value={data.allergies}
                                            className="w-full"
                                            placeholder="Allergies"
                                            onChange={handleOnChange}
                                        />
                                        <InputError
                                            message={errors.allergies}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                {/* family history */}
                                <div className="md:mt-1">
                                    <InputLabel
                                        htmlFor="family_history"
                                        value="Family History"
                                    />
                                    <Textarea
                                        name="family_history"
                                        id="family_history"
                                        value={data.family_history}
                                        className="w-full"
                                        placeholder="Family history"
                                        onChange={handleOnChange}
                                    />
                                    <InputError
                                        message={errors.family_history}
                                        className="mt-2"
                                    />
                                </div>
                                {/* socail_history */}
                                <div className="md:mt-1">
                                    <InputLabel
                                        htmlFor="social_history"
                                        value="Socail History"
                                    />
                                    <Textarea
                                        name="social_history"
                                        id="social_history"
                                        value={data.social_history}
                                        className="w-full"
                                        placeholder="Social history"
                                        onChange={handleOnChange}
                                    />
                                    <InputError
                                        message={errors.social_history}
                                        className="mt-2"
                                    />
                                </div>
                                {/* diagnosis */}
                                <div className="md:mt-1">
                                    <InputLabel
                                        htmlFor="diagnosis"
                                        value="Diagnosis"
                                    />
                                    <Textarea
                                        name="diagnosis"
                                        id="diagnosis"
                                        value={data.diagnosis}
                                        className="w-full"
                                        placeholder="Diagnosis"
                                        onChange={handleOnChange}
                                    />
                                    <InputError
                                        message={errors.diagnosis}
                                        className="mt-2"
                                    />
                                </div>
                                {/* plan */}
                                <div className="md:mt-1">
                                    <InputLabel htmlFor="plan" value="Plan" />
                                    <Textarea
                                        name="plan"
                                        id="plan"
                                        value={data.plan}
                                        className="w-full"
                                        placeholder="Plan"
                                        onChange={handleOnChange}
                                    />
                                    <InputError
                                        message={errors.plan}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end md:px-24 px-5">
                            <PrimaryButton
                                disabled={processing}
                                className="w-28 flex justify-center"
                            >
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
