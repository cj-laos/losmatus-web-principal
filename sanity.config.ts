"use client";
import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {schemaTypes} from "./src/sanity/schemaTypes";
export default defineConfig({name:"default",title:"LOSMATUS CMS",projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||"missing-project-id",dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||"production",basePath:"/studio",plugins:[structureTool(),visionTool()],schema:{types:schemaTypes}});
