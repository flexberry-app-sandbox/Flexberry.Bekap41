﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Bekap4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Номенклатура.
    /// </summary>
    // *** Start programmer edit section *** (Номенклатура CustomAttributes)

    // *** End programmer edit section *** (Номенклатура CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НоменклатураE", new string[] {
            "Номенклатура as \'Номенклатура\'"})]
    [View("НоменклатураL", new string[] {
            "Номенклатура as \'Номенклатура\'"})]
    public class Номенклатура : ICSSoft.STORMNET.DataObject
    {
        
        private string fНоменклатура;
        
        private IIS.Bekap4.ТЧЗаказ fТЧЗаказ;
        
        // *** Start programmer edit section *** (Номенклатура CustomMembers)

        // *** End programmer edit section *** (Номенклатура CustomMembers)

        
        /// <summary>
        /// Номенклатура.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.Номенклатура CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.Номенклатура CustomAttributes)
        [StrLen(255)]
        public virtual string Номенклатура
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.Номенклатура Get start)

                // *** End programmer edit section *** (Номенклатура.Номенклатура Get start)
                string result = this.fНоменклатура;
                // *** Start programmer edit section *** (Номенклатура.Номенклатура Get end)

                // *** End programmer edit section *** (Номенклатура.Номенклатура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.Номенклатура Set start)

                // *** End programmer edit section *** (Номенклатура.Номенклатура Set start)
                this.fНоменклатура = value;
                // *** Start programmer edit section *** (Номенклатура.Номенклатура Set end)

                // *** End programmer edit section *** (Номенклатура.Номенклатура Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Bekap4.ТЧЗаказ.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ТЧЗаказ CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ТЧЗаказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ТЧЗаказ"})]
        public virtual IIS.Bekap4.ТЧЗаказ ТЧЗаказ
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ТЧЗаказ Get start)

                // *** End programmer edit section *** (Номенклатура.ТЧЗаказ Get start)
                IIS.Bekap4.ТЧЗаказ result = this.fТЧЗаказ;
                // *** Start programmer edit section *** (Номенклатура.ТЧЗаказ Get end)

                // *** End programmer edit section *** (Номенклатура.ТЧЗаказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ТЧЗаказ Set start)

                // *** End programmer edit section *** (Номенклатура.ТЧЗаказ Set start)
                this.fТЧЗаказ = value;
                // *** Start programmer edit section *** (Номенклатура.ТЧЗаказ Set end)

                // *** End programmer edit section *** (Номенклатура.ТЧЗаказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НоменклатураE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НоменклатураE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НоменклатураE", typeof(IIS.Bekap4.Номенклатура));
                }
            }
            
            /// <summary>
            /// "НоменклатураL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НоменклатураL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НоменклатураL", typeof(IIS.Bekap4.Номенклатура));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Номенклатура.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfНоменклатура CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfНоменклатура CustomAttributes)
    public class DetailArrayOfНоменклатура : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Bekap4.DetailArrayOfНоменклатура members)

        // *** End programmer edit section *** (IIS.Bekap4.DetailArrayOfНоменклатура members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Номенклатура by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Номенклатура.
        /// </summary>
        public DetailArrayOfНоменклатура(IIS.Bekap4.ТЧЗаказ fТЧЗаказ) : 
                base(typeof(Номенклатура), ((ICSSoft.STORMNET.DataObject)(fТЧЗаказ)))
        {
        }
        
        public IIS.Bekap4.Номенклатура this[int index]
        {
            get
            {
                return ((IIS.Bekap4.Номенклатура)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Bekap4.Номенклатура dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
