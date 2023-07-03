import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import joi from 'joi'
import dayjs from 'dayjs'
import utf8 from 'utf8'

dotenv.config()

const participantsSchema = joi.object({
  name: joi.string().required().min(3)
})