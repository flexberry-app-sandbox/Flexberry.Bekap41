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
    /// Единицы измерения.
    /// </summary>
    // *** Start programmer edit section *** (ЕдиницыИзмер CustomAttributes)

    // *** End programmer edit section *** (ЕдиницыИзмер CustomAttributes)
    [AutoAltered()]
    [Caption("Единицы измерения")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЕдиницыИзмерE", new string[0])]
    [View("ЕдиницыИзмеренияE", new string[0])]
    [View("ЕдиницыИзмеренияL", new string[0])]
    public class ЕдиницыИзмер : ICSSoft.STORMNET.DataObject
    {
        
        private string fЕдиницаИзмер;
        
        private IIS.Bekap4.ТЧЗаказ fТЧЗаказ;
        
        // *** Start programmer edit section *** (ЕдиницыИзмер CustomMembers)

        // *** End programmer edit section *** (ЕдиницыИзмер CustomMembers)

        
        /// <summary>
        /// ЕдиницаИзмер.
        /// </summary>
        // *** Start programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер CustomAttributes)

        // *** End programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер CustomAttributes)
        [StrLen(255)]
        public virtual string ЕдиницаИзмер
        {
            get
            {
                // *** Start programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер Get start)

                // *** End programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер Get start)
                string result = this.fЕдиницаИзмер;
                // *** Start programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер Get end)

                // *** End programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер Set start)

                // *** End programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер Set start)
                this.fЕдиницаИзмер = value;
                // *** Start programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер Set end)

                // *** End programmer edit section *** (ЕдиницыИзмер.ЕдиницаИзмер Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Bekap4.ТЧЗаказ.
        /// </summary>
        // *** Start programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ CustomAttributes)

        // *** End programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ТЧЗаказ"})]
        public virtual IIS.Bekap4.ТЧЗаказ ТЧЗаказ
        {
            get
            {
                // *** Start programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ Get start)

                // *** End programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ Get start)
                IIS.Bekap4.ТЧЗаказ result = this.fТЧЗаказ;
                // *** Start programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ Get end)

                // *** End programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ Set start)

                // *** End programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ Set start)
                this.fТЧЗаказ = value;
                // *** Start programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ Set end)

                // *** End programmer edit section *** (ЕдиницыИзмер.ТЧЗаказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЕдиницыИзмерE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдиницыИзмерE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдиницыИзмерE", typeof(IIS.Bekap4.ЕдиницыИзмер));
                }
            }
            
            /// <summary>
            /// "ЕдиницыИзмеренияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдиницыИзмеренияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдиницыИзмеренияE", typeof(IIS.Bekap4.ЕдиницыИзмер));
                }
            }
            
            /// <summary>
            /// "ЕдиницыИзмеренияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдиницыИзмеренияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдиницыИзмеренияL", typeof(IIS.Bekap4.ЕдиницыИзмер));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ЕдиницыИзмер.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЕдиницыИзмер CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЕдиницыИзмер CustomAttributes)
    public class DetailArrayOfЕдиницыИзмер : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Bekap4.DetailArrayOfЕдиницыИзмер members)

        // *** End programmer edit section *** (IIS.Bekap4.DetailArrayOfЕдиницыИзмер members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ЕдиницыИзмер by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ЕдиницыИзмер.
        /// </summary>
        public DetailArrayOfЕдиницыИзмер(IIS.Bekap4.ТЧЗаказ fТЧЗаказ) : 
                base(typeof(ЕдиницыИзмер), ((ICSSoft.STORMNET.DataObject)(fТЧЗаказ)))
        {
        }
        
        public IIS.Bekap4.ЕдиницыИзмер this[int index]
        {
            get
            {
                return ((IIS.Bekap4.ЕдиницыИзмер)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Bekap4.ЕдиницыИзмер dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
